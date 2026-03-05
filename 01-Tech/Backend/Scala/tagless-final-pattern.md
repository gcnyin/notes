---
created: 2025-01-17
updated: 2025-01-17
---
# Tagless final pattern

https://www.baeldung.com/scala/tagless-final-pattern

# Algebras

用来对side-effect进行抽象。

```scala
trait ShoppingCarts[F[_]] {
  def create(id: String): F[Unit]
  def find(id: String): F[Option[ShoppingCart]]
  def add(sc: ShoppingCart, product: Product): F[ShoppingCart]
}
```

这个叫Algebras，是对领域的建模，作为一种抽象的DSL。

具体的实现叫interpreter。

```scala
type ShoppingCartRepository = Map[String, ShoppingCart]
type ScRepoState[A] = State[ShoppingCartRepository, A]

implicit object TestShoppingCartInterpreter extends ShoppingCarts[ScRepoState] {
  override def create(id: String): ScRepoState[Unit] =
    State.modify { carts =>
      val shoppingCart = ShoppingCart(id, List())
      carts + (id -> shoppingCart)
    }
  override def find(id: String): ScRepoState[Option[ShoppingCart]] =
    State.inspect { carts =>
      carts.get(id)
    }
  override def add(sc: ShoppingCart, product: Product): ScRepoState[ShoppingCart] =
    State { carts =>
      val products = sc.products
      val updatedCart = sc.copy(products = product :: products)
      (carts + (sc.id -> updatedCart), updatedCart)
    }
}
```

我们把Algebras的客户端叫作Program——程序。程序是指，调用Algebras和其interpreter来实现具体的业务逻辑的一种东西。

比如，我们可以在客户端添加一些类型约束，让它可以使用for-comrehension表达式。

```scala
def createAndAddToCart[F[_] : Monad] = ???
```

# 实例化

在客户端逻辑里，我们需要注入一个具体的interpreter。有两种方式，implicit参数，和smart constructor。

## implicit参数

```scala
def createAndAddToCart[F[_] : Monad](product: Product, cartId: String)
  (implicit shoppingCarts: ShoppingCarts[F]): F[Option[ShoppingCart]] =
  for {
    _ <- shoppingCarts.create(cartId)
    maybeSc <- shoppingCarts.find(cartId)
    maybeNewSc <- maybeSc.traverse(sc => shoppingCarts.add(sc, product))
  } yield maybeNewSc
```

更进一步

```scala
def createAndToCart[F[_] : Monad : ShoppingCarts](product: Product, cartId: String): Unit = ???

object ShoppingCarts {
  def apply[F[_]](implicit sc: ShoppingCarts[F]): ShoppingCarts[F] = sc
}

def createAndToCart[F[_] : Monad : ShoppingCarts](product: Product, cartId: String): F[Option[ShoppingCart]] =
  for {
    _ <- ShoppingCarts[F].create(cartId)
    maybeSc <- ShoppingCarts[F].find(cartId)
    maybeNewSc <- maybeSc.traverse(sc => ShoppingCarts[F].add(sc, product))
  } yield maybeNewSc
```

讲道理啊，其实这块没看明白 `F[_] : Monad : ShoppingCarts`，`F[_] : ShoppingCarts`能行吗？

然后作者总结了一句，

> However, as we said, **algebras and interpreters are not applying the type classes pattern, as they don’t share the same scope**. So, many developers consider it a bad practice to add algebras as an effect type constraint.

有个毛关系啊？？我没搞懂为啥说他俩不是same scope。怎么就不一样了啊，看着挺像那么回事的。

好吧，想了下确实不太一样，Monad是type class，而ShoppingCarts是Algebra。这两个在概念确实不一样。但好像并不妨碍他俩用啊。。。

## Smart Constructor

这个就是不用implicit来解决。

```scala
class ShoppingCartsInterpreter private(repo: ShoppingCartRepository)
  extends ShoppingCarts[ScRepoState] {
  // Functions implementation
}

object ShoppingCartsInterpreter {
  def make(): ShoppingCartsInterpreter = {
    new ShoppingCartsInterpreter(repository)
  }
  private val repository: ShoppingCartRepository = Map()
}
```

我没搞懂为啥要私有化constructor？

```scala
case class ProgramWithDep[F[_] : Monad](carts: ShoppingCarts[F]) {
  def createAndToCart(product: Product, cartId: String): F[Option[ShoppingCart]] = {
    for {
      _ <- carts.create(cartId)
      maybeSc <- carts.find(cartId)
      maybeNewSc <- maybeSc.traverse(sc => carts.add(sc, product))
    } yield maybeNewSc
  }
}

val program: ProgramWithDep[ScRepoState] = ProgramWithDep {
  ShoppingCartWithDependencyInterpreter.make()
}
program.createAndToCart(Product("id", "a product"), "cart1")
```

# 总结

写一个service一定要带一个空的 `F[_]`。

```scala
trait UserService[F[_]] {
  def getUserById(id: String): F[Option[User]]
  def deleteUser(id: String): F[Unit]
}
```

## distage

distage文档终于让我稍微搞明白了tagless final搭配implicit参数的用法。

https://izumi.7mind.io/distage/basics.html#tagless-final-style

依赖要装全

```scala
  lazy val distage = "io.7mind.izumi" %% "distage-core" % "1.0.8"
  lazy val cats = "org.typelevel" %% "cats-core" % "2.7.0"
  lazy val catsEffect = "org.typelevel" %% "cats-effect" % "2.5.1"

  lazy val kindProjector = "org.typelevel" % "kind-projector" % "0.13.2" cross CrossVersion.full
```

```scala
import cats.Monad
import cats.effect.{Sync, IO}
import cats.syntax.all._
import distage.{Roots, Module, ModuleDef, Injector, Tag, TagK, TagKK}

trait Validation[F[_]] {
  def minSize(s: String, n: Int): F[Boolean]
  def hasNumber(s: String): F[Boolean]
}
object Validation {
  def apply[F[_]: Validation]: Validation[F] = implicitly
}

trait Interaction[F[_]] {
  def tell(msg: String): F[Unit]
  def ask(prompt: String): F[String]
}
object Interaction {
  def apply[F[_]: Interaction]: Interaction[F] = implicitly
}

class TaglessProgram[F[_]: Monad: Validation: Interaction] {
  def program: F[Unit] = for {
    userInput <- Interaction[F].ask("Give me something with at least 3 chars and a number on it")
    valid     <- (Validation[F].minSize(userInput, 3), Validation[F].hasNumber(userInput)).mapN(_ && _)
    _         <- if (valid) Interaction[F].tell("awesomesauce!")
                 else       Interaction[F].tell(s"$userInput is not valid")
  } yield ()
}

def ProgramModule[F[_]: TagK: Monad] = new ModuleDef {
  make[TaglessProgram[F]]
}
```

上面是Algerbra和Program，下面是Interpreter。

```scala
final class SyncValidation[F[_]](implicit F: Sync[F]) extends Validation[F] {
  def minSize(s: String, n: Int): F[Boolean] = F.delay(s.size >= n)
  def hasNumber(s: String): F[Boolean]       = F.delay(s.exists(c => "0123456789".contains(c)))
}

final class SyncInteraction[F[_]](implicit F: Sync[F]) extends Interaction[F] {
  def tell(s: String): F[Unit]  = F.delay(println(s))
  def ask(s: String): F[String] = F.delay("This could have been user input 1")
}

def SyncInterpreters[F[_]: TagK: Sync] = {
  new ModuleDef {
    make[Validation[F]].from[SyncValidation[F]]
    make[Interaction[F]].from[SyncInteraction[F]]
  }
}

// combine all modules

def SyncProgram[F[_]: TagK: Sync] = ProgramModule[F] ++ SyncInterpreters[F]

// create object graph Lifecycle

val objectsLifecycle = Injector[IO]().produce(SyncProgram[IO], Roots.Everything)
// objectsLifecycle: izumi.distage.model.definition.Lifecycle[IO, izumi.distage.model.Locator] = izumi.distage.model.definition.Lifecycle$$anon$10@7ef607e8

// run

objectsLifecycle.use(_.get[TaglessProgram[IO]].program).unsafeRunSync()
// awesomesauce!
```

不行了，上面这段程序太逆天了，根本不是人能写出来的。

```scala
final class SyncValidation[F[_]](implicit F: Sync[F]) extends Validation[F] {
  def minSize(s: String, n: Int): F[Boolean] = F.delay(s.size >= n)
  def hasNumber(s: String): F[Boolean]       = F.delay(s.exists(c => "0123456789".contains(c)))
}
```

`(implicit F: Sync[F])` 这个`F`和`SyncValidation[F[_]]`的`F`根本就不是一个东西，另起一个变量名都可以，这distage文档里的demo属实不是人写出来的。

可以改成下面两种，可读性更好。

```scala
final class SyncValidation[F[_]](implicit S: Sync[F]) extends Validation[F] {
  def minSize(s: String, n: Int): F[Boolean] = S.delay(s.size >= n)
  def hasNumber(s: String): F[Boolean]       = S.delay(s.exists(c => "0123456789".contains(c)))
}

final class SyncValidation[F[_]] extends Validation[F] {
  def minSize(s: String, n: Int): F[Boolean] = Sync[F].delay(s.size >= n)
  def hasNumber(s: String): F[Boolean]       = Sync[F].delay(s.exists(c => "0123456789".contains(c)))
}
```
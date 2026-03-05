---
created: 2025-01-17
updated: 2026-03-04
---
# State Monad

2021-05-22

这段代码还真就无法理解啊

```scala
import cats.data.State
import State._

val program: State[Int, (Int, Int, Int)] = for {
  a <- get[Int]
  _ <- set[Int](a + 1)
  b <- get[Int]
  _ <- modify[Int](_ + 1)
  c <- inspect[Int, Int](_ * 1000)
} yield (a, b, c)
// program: State[Int, (Int, Int, Int)] = cats.data.IndexedStateT@3b525fbf

val (state, result) = program.run(1).value
// state: Int = 3
// result: (Int, Int, Int) = (1, 2, 3000)
```

```scala
State.get[Int].run(10).value
// res1: (Int, Int) = (10, 10)
State.set[Int](30).run(10).value
// res2: (Int, Unit) = (30, ())
State.pure[Int, String]("Result").run(10).value
// res3: (Int, String) = (10, "Result")
State.inspect[Int, String](x => x.toString).run(10).value
// res4: (Int, String) = (10, "10!")
State.modify[Int](_ + 1).run(10).value
// res5: (Int, Unit) = (11, ())
```

2021-05-24

想明白了，之前把这个 for-comprehension 开展应该是

```scala
val value: (Int, (Int, Int, Int)) =
  get[Int].flatMap(a =>
    set[Int](a + 1).flatMap(_ =>
      get[Int].flatMap(b =>
        modify[Int](_ + 1).flatMap(_ =>
          inspect[Int, Int](_ * 1000))
          .map(c => (a, b, c)))))
    .run(1).value
println(value) // (3,(1,2,3000))
```

如果感觉困难可以先看下面这个例子

```scala
println((for {
  a <- get[Int]
  _ <- set[Int](a + 1)
} yield a).run(1).value)
// 等价于，都是 (2,1)
println(get[Int]
		.flatMap(a => set[Int](a + 1).map(_ => a))
		.run(1).value)
```

还有这个

```scala
val program = for {
  a <- get[Int]
  _ <- set[Int](a + 1)
  b <- get[Int]
} yield (a, b)
println(program.run(1).value)
// 等价，(2,(1,2))
val value = get[Int].flatMap(a =>
  set[Int](a + 1)
    .flatMap(_ =>
      get[Int]
        .map(b => (a, b))))
  .run(1).value
println(value)
```

最重要的是 flatMap 的实现。fas 是传进来的 function，比如这段 `set[x](y).flatMap(_ => f)`，f 的实参其实是 `set[x](y)` 之后的 state。这样就是解释了为什么 state 没有显式写出却能一直传递。

```scala
def flatMap[B, SC](fas: A => IndexedStateT[F, SB, SC, B])(implicit F: FlatMap[F]): IndexedStateT[F, SA, SC, B] =
  IndexedStateT.applyF(F.map(runF) { safsba =>
    AndThen(safsba).andThen { fsba =>
      F.flatMap(fsba) {
        case (sb, a) =>
          fas(a).run(sb)
      }
    }
  })
```

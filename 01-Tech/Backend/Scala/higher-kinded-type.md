---
created: 2025-01-17
updated: 2025-01-17
---
# higher kinded type

## 子类还是约束？

下面这个程序里，`F[_]: Foo`是继承根本说不通啊，其实是一种约束，找到一个`Foo[F]`的implicit实例。

```scala
trait Foo[F[_]]

class Bar[F[_]: Foo]

implicit val a = new Foo[List] {}

val bar = new Bar[List]
```

打开vscode metals的show implicti value就可以发现，`new Bar[List]`那里其实插入了一个implicit参数`a`。

```scala
val bar = new Bar[List](a)
```

## 相关文档

https://docs.scala-lang.org/scala3/book/ca-context-bounds.html

https://www.baeldung.com/scala/view-context-bounds

其实scala官方文档里有写，我只是“重新发现”了这个事实，23333。

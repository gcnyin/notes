---
created: 2025-01-17
updated: 2026-03-04
---
# 范畴与函子

Functor：函子

Option, List, and Either 这些都是函子

Monad

```scala
trait Monad[F[_]] {
  def pure[A](value: A): F[A]
  def flatMap[A, B](value: F[A])(func: A => F[B]): F[B]
}
```

monad 里的 flatmap，第二个参数 func 的返回类型也是 F[_]，由一范畴映射至自身，所以说它是"自函子"。

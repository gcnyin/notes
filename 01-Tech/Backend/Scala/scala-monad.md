---
created: 2026-03-05
updated: 2026-03-05
---

# Monoid

```scala
trait Monoid[A] {
  def combine(x: A, y: A): A
  def empty: A
}

def associativeLaw[A](x: A, y: A, z: A)
      (implicit m: Monoid[A]): Boolean = {
  m.combine(x, m.combine(y, z)) ==
    m.combine(m.combine(x, y), z)
}

def identityLaw[A](x: A)
      (implicit m: Monoid[A]): Boolean = {
  (m.combine(x, m.empty) == x) &&
    (m.combine(m.empty, x) == x)
}
```

结合律 (associativity)：对任何在 M 内的 a、b、c ， (a*b)c = a(b*c) 。

单位元 (identity)：存在一在 M 内的元素 e，使得任一于 M 内的 a 都会符合 a*e = e*a = a 。

# Semigroup

```scala
trait Semigroup[A] {
  def combine(x: A, y: A): A
}

trait Monoid[A] extends Semigroup[A] {
  def empty: A
}
```

Semigroup 就是没有单位元。

# Functors

函子。

Informally, a functor is anything with a map method。有 `map` 方法就好，比如 `List`, `Option`, `Future`。

```scala
trait Functor[F[_]] {
  def map[A, B](fa: F[A])(f: A => B): F[B]
}
```

# Monad

Informally, a monad is anything with a constructor and a flatMap method.

```scala
trait Monad[F[_]] {
  def pure[A](value: A): F[A]

  def flatMap[A, B](value: F[A])(func: A => F[B]): F[B]
}
```

---
created: 2025-01-17
updated: 2025-01-17
---
# implicit conversion

当conversions有好几个可选的implicit时。编译器会选择more specific的那一个。什么叫specific呢？

- The argument type of the former is a subtype of the latter's.
- Both conversions are methods, and the enclosing class of the former extends the
enclosing class of the latter.

一种是一个是另一个的子类（从参数类型与返回类型两方面）。

---
created: 2025-01-17
updated: 2026-03-04
---
# Monoids and Semigroups

https://zh.wikipedia.org/wiki/群

## Semigroup 半群

集合S和其上的二元运算·:S×S→S。若·满足结合律，即：∀x,y,z∈S，有(x·y)·z=x·(y·z)，则称有序对(S,·)为半群，运算·称为该半群的乘法。实际使用中，在上下文明确的情况下，可以简略叙述为“半群S”。

## Monoids 幺半群

幺半群是一个带有二元运算 *: M × M → M 的集合 M ，其符合下列公理：

- 结合律(associativity)：对任何在 M 内的a、b、c ， (a*b)c = a(b*c) 。
- 单位元(identity)：存在一在 M 内的元素e，使得任一于 M 内的 a 都会符合 a*e = e*a = a 。

通常也会多加上另一个公理：

- 封闭性(close)：对任何在 M 内的 a 、 b ， a*b 也会在 M 内。

但这不是必要的，因为在[二元运算](https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%85%83%E9%81%8B%E7%AE%97)中即内含了此一公理。

另外，幺半群也可以说是带有[单位元](https://zh.wikipedia.org/wiki/%E5%96%AE%E4%BD%8D%E5%85%83)的[半群](https://zh.wikipedia.org/wiki/%E5%8D%8A%E7%BE%A4)。

幺半群除了没有[逆元素](https://zh.wikipedia.org/wiki/%E9%80%86%E5%85%83%E7%B4%A0)之外，满足其他所有[群](https://zh.wikipedia.org/wiki/%E7%BE%A4)的公理。因此，一个带有逆元素的幺半群和群是一样的。

## Group 群

群(G,·)是由集合G和二元运算"·"构成的，符合以下四个性质（称“群公理”）的数学结构。其中，二元运算结合任何两个元素a和b而形成另一个元素，记为a·b，符号"·"是具体的运算，比如整数加法。

群公理所述的四个性质为：

- 封闭性：对于所有G中a, b，运算a·b的结果也在G中。
- 结合律：对于所有G中的a, b和c，等式 (a·b)·c = a· (b·c)成立。
- 单位元：存在G中的一个元素e，使得对于所有G中的元素a，总有等式e·a = a·e = a 成立。
- 逆元：对于每个G中的a，存在G中的一个元素b使得总有a·b = b·a = e，此处e为单位元。

![](./group.png)
---
created: 2025-01-17
updated: 2025-01-17
---
# value object vs entity

ddd实践的一部分。

最大不同：有无id

一、比较的方式不同

二、生命周期不同

entity它有一个比较明确的生命周期，从创建到使用到销毁，是有一个历史存在的

value object。没有自己的历史轨迹，依附于entity。

三、可变性

entity，只要id不变，剩下的字段从理论上讲都可以变的。

value object则不一样，如果修改了某个值，那就要创建一个新的value object。

四、怎么识别

不是非常清晰，是有一些模糊的。

可以尝试将value object替换成基本类型，来判断value object是否合理。

五、在系统中如何保存

实体会对应具体的数据库的表，值对象则是其中的某个字段，不应该把值对象作为一个单独的表存在。

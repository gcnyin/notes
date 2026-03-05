---
created: 2025-01-17
updated: 2025-01-17
---
# json micro benchmark

最近做了一个scala json库的性能测试，用的是sbt-jmh。

repo: https://github.com/gcnyin/scala-json-micro-benchmark

result: https://github.com/gcnyin/scala-json-micro-benchmark/wiki

可以看到scala最流行的circe并不是性能最强的。

一开始拿到这个结果很兴奋啊，和群里的小伙伴交流，说可以用jackson替换之类的云云。结果就被打脸了。

jilen指出，这些性能较好的库，抽象层次很低，都是直接输出到string，没有什么中间抽象。

我理解这确实是个差异，circe和json4s这些库提供的功能不止序化列一个case class那么简单，还有许多其他功能。比如json diff之类的。这些功能的代价就是性能稍差。

不过目前看来，circe足够用了，没有换的必要。唯一的问题是`circe-generic-extras`不支持scala3。如果只需要序列化/反序列化，可以用zio-json，对adt支持很好，而且性能非常不错，可惜版本号还在M和SNAPSHOT。

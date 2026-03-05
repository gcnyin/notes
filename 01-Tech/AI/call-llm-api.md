---
created: 2025-02-01
updated: 2025-02-01
---
# 调用llm接口

openai官方提供了python和js的库，直接使用即可。

Java可以用langchain4j，也支持流式输出。Scala可以包一层，转换为akkstream, fs2, zio。

也可以自己手写http调用，但不方便。

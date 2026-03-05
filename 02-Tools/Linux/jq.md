---
created: 2025-03-10
updated: 2025-03-10
---
# jq

`jq` 是一个命令行工具，用于处理 JSON 数据。它可以帮助你提取、过滤、转换和格式化 JSON 数据。以下是一些常见的用法示例：

## 1. 安装 `jq`

在大多数 Linux 发行版上，你可以通过包管理器安装 `jq`：

Debian/Ubuntu:

```bash
sudo apt-get install jq
```

macOS (使用 Homebrew):

```bash
brew install jq
```

## 2. 基本用法

### 2.1 读取 JSON 文件

假设你有一个 `data.json` 文件，内容如下：

```json
{
  "name": "Alice",
  "age": 30,
  "hobbies": ["reading", "hiking", "coding"]
}
```

你可以使用 `jq` 来读取并格式化这个文件：

```bash
jq . data.json
```

### 2.2 提取字段

提取 `name` 字段：

```bash
jq '.name' data.json
```

输出：

```json
"Alice"
```

### 2.3 提取嵌套字段

假设 JSON 数据如下：

```json
{
  "person": {
    "name": "Bob",
    "age": 25
  }
}
```

提取 `person` 对象中的 `name` 字段：

```bash
jq '.person.name' data.json
```

输出：

```json
"Bob"
```

### 2.4 提取数组元素

提取 `hobbies` 数组中的第一个元素：

```bash
jq '.hobbies[0]' data.json
```

输出：

```json
"reading"
```

### 2.5 过滤数组

假设 JSON 数据如下：

```json
{
  "users": [
    {"name": "Alice", "age": 30},
    {"name": "Bob", "age": 25},
    {"name": "Charlie", "age": 35}
  ]
}
```

提取所有年龄大于 30 的用户：

```bash
jq '.users[] | select(.age > 30)' data.json
```

输出：

```json
{
  "name": "Charlie",
  "age": 35
}
```

## 3. 高级用法

### 3.1 格式化输出

使用 `-r` 选项输出原始字符串（去掉引号）：

```bash
jq -r '.name' data.json
```

输出：

```
Alice
```

### 3.2 修改 JSON 数据

假设你想将 `age` 字段增加 5：

```bash
jq '.age += 5' data.json
```

输出：

```json
{
  "name": "Alice",
  "age": 35,
  "hobbies": ["reading", "hiking", "coding"]
}
```

### 3.3 合并 JSON 数据

假设你有两个 JSON 文件 `data1.json` 和 `data2.json`，你可以使用 `jq` 将它们合并：

```bash
jq -s '.[0] * .[1]' data1.json data2.json
```

## 4. 从标准输入读取数据

你可以通过管道将 JSON 数据传递给 `jq`：

```bash
echo '{"name": "Alice", "age": 30}' | jq '.name'
```

输出：

```json
"Alice"
```

## 5. 更多功能

`jq` 还有很多强大的功能，比如条件判断、循环、自定义函数等。你可以通过 `man jq` 或 `jq --help` 查看完整的文档和选项。

## 6. 示例

假设你有一个复杂的 JSON 数据：

```json
{
  "employees": [
    {"name": "Alice", "age": 30, "department": "HR"},
    {"name": "Bob", "age": 25, "department": "Engineering"},
    {"name": "Charlie", "age": 35, "department": "Engineering"}
  ]
}
```

提取所有 `Engineering` 部门的员工：

```bash
jq '.employees[] | select(.department == "Engineering")' data.json
```

输出：

```json
{
  "name": "Bob",
  "age": 25,
  "department": "Engineering"
}
{
  "name": "Charlie",
  "age": 35,
  "department": "Engineering"
}
```

User: jq如何对json排序
Kimi: `jq` 是一个非常强大的命令行工具，用于处理 JSON 数据。如果你想对 JSON 数据进行排序，`jq` 提供了多种方式来实现。以下是一些常见的排序场景和对应的 `jq` 命令示例：

### 1. 对 JSON 数组中的元素排序
如果 JSON 数据是一个数组，并且你想对数组中的元素进行排序，可以使用 `sort` 函数。

#### 示例：
假设你有以下 JSON 数据：
```json
[
  3,
  1,
  4,
  2
]
```
你可以用以下命令对数组中的数字进行排序：
```bash
jq 'sort' input.json
```
输出结果：
```json
[
  1,
  2,
  3,
  4
]
```

如果数组中的元素是对象，并且你想根据某个键的值进行排序，可以使用 `sort_by` 函数。

#### 示例：
假设你有以下 JSON 数据：
```json
[
  { "name": "Alice", "age": 30 },
  { "name": "Bob", "age": 25 },
  { "name": "Charlie", "age": 35 }
]
```
你可以根据 `age` 字段进行排序：
```bash
jq 'sort_by(.age)' input.json
```
输出结果：
```json
[
  { "name": "Bob", "age": 25 },
  { "name": "Alice", "age": 30 },
  { "name": "Charlie", "age": 35 }
]
```

### 2. 对 JSON 对象的键排序
如果 JSON 数据是一个对象，并且你想对键进行排序，可以先将对象转换为键值对数组，排序后再转换回对象。

#### 示例：
假设你有以下 JSON 数据：
```json
{
  "c": 3,
  "a": 1,
  "b": 2
}
```
你可以用以下命令对键进行排序：
```bash
jq 'to_entries | sort_by(.key) | from_entries' input.json
```
输出结果：
```json
{
  "a": 1,
  "b": 2,
  "c": 3
}
```

### 3. 自定义排序规则
如果需要更复杂的排序规则，可以结合 `sort_by` 和自定义表达式来实现。

#### 示例：
假设你有以下 JSON 数据：
```json
[
  { "name": "Alice", "age": 30 },
  { "name": "Bob", "age": 25 },
  { "name": "Charlie", "age": 35 }
]
```
如果你想先按 `age` 排序，如果 `age` 相同，则按 `name` 排序：
```bash
jq 'sort_by(.age, .name)' input.json
```

### 总结
- 对数组排序：`sort` 或 `sort_by`
- 对对象键排序：`to_entries | sort_by(.key) | from_entries`
- 自定义排序规则：结合 `sort_by` 和表达式


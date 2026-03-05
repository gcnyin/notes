---
created: 2025-02-10
updated: 2025-02-10
---
# cmake demo

User: 我有一个main.cpp文件，想在c++ 11上运行，请写一份CMAKE文件，帮我构建项目

Kimi: 以下是一个简单的CMake文件，用于构建一个包含`main.cpp`的C++11项目：

```cmake
cmake_minimum_required(VERSION 3.10)
project(MyProject VERSION 1.0 LANGUAGES CXX)

# 设置 C++ 标准为 C++11
set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# 添加源文件
add_executable(MyProject main.cpp)
```

## 使用说明

1. 保存文件：将上述内容保存为`CMakeLists.txt`文件，放置在与`main.cpp`同一目录下。

2. 运行 CMake：

   ```bash
   cmake .
   ```

3. 编译项目：

   ```bash
   make
   ```

4. 运行程序：

   ```bash
   ./MyProject
   ```

## 说明

- `cmake_minimum_required(VERSION 3.10)`：指定所需的CMake最低版本。
- `project(MyProject VERSION 1.0 LANGUAGES CXX)`：定义项目名称和版本。
- `set(CMAKE_CXX_STANDARD 11)`：指定使用C++11标准。
- `add_executable`：将`main.cpp`编译成可执行文件`MyProject`。

如果你有其他需求（如添加更多源文件或设置编译器选项），可以进一步修改CMake文件。

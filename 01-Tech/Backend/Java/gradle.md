---
created: 2025-01-17
updated: 2025-01-17
---
# gradle

Gradle mirror

```groovy
maven { url 'https://maven.aliyun.com/nexus/content/groups/public/' }
maven { url 'https://repo.huaweicloud.com/repository/maven/' }
```

Shadow jar

```groovy
plugins {
  id "com.github.johnrengelman.shadow" version "7.1.1"
}
```

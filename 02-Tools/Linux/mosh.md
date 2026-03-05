---
created: 2025-01-17
updated: 2025-01-17
---
# mosh

连接服务器出现这种问题

```
locale: Cannot set LC_CTYPE to default locale: No such file or directory
locale: Cannot set LC_ALL to default locale: No such file or directory
```

可以在`.zshrc`里添加

```
export LC_ALL="en_US.UTF-8"
```

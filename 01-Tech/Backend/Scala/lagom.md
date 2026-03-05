---
created: 2025-01-17
updated: 2025-01-17
---
# lagom

## persistence

应用重新启动后，如果一个key有event，但没有对这个key的查询，那么并不会立即从数据库层拉取数据。只有当针对这个key的新查询到来时，才会去读数据库，rerun一遍所有event保存到内存里。

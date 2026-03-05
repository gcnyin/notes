---
created: 2025-02-06
updated: 2026-03-04
---
# mysql

启动

```shell
docker run --restart always -d --name local-mysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=test_db -p 3306:3306 mysql:8.0.31
```

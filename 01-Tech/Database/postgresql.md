---
created: 2025-02-06
updated: 2026-03-04
---
# postgresql

docker 启动

```shell
docker run --name mypostgres -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=password -e POSTGRES_DB=test -p 5432:5432 -d postgres:15
```

docker-compose 启动

```yaml
version: '3.1'

services:
  db:
    image: postgres:13.5-alpine
    restart: always
    environment:
      - POSTGRES_DB=test
      - POSTGRES_USER=admin
      - POSTGRES_PASSWORD=password
    ports:
      - 5432:5432
    volumes:
      - pgdata:/var/lib/postgresql/data
volumes:
  pgdata:
```

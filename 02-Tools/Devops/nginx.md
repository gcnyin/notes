---
created: 2025-01-17
updated: 2026-03-04
---
# nginx

## 重定向 redirect

```
server {
        listen 8080 default_server;
        listen [::]:8080 default_server;

        # root /var/www/html;

        server_name _;

        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                # try_files $uri $uri/ =404;
                return 301 https://blog.boluotou.tech;
        }
}
```
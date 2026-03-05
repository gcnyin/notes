---
created: 2025-01-17
updated: 2026-03-04
---
# Haproxy

## Install

```shell
apt install -y haproxy
```

## Basic conf

/etc/haproxy/haproxy.cfg

```
global
        log /dev/log    local0
        log /dev/log    local1 notice
        chroot /var/lib/haproxy
        stats socket /run/haproxy/admin.sock mode 660 level admin expose-fd listeners
        stats timeout 30s
        user haproxy
        group haproxy
        daemon

        # Default SSL material locations
        ca-base /etc/ssl/certs
        crt-base /etc/ssl/private

        # See: https://ssl-config.mozilla.org/#server=haproxy&server-version=2.0.3&config=intermediate
        ssl-default-bind-ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384
        ssl-default-bind-ciphersuites TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256
        ssl-default-bind-options ssl-min-ver TLSv1.2 no-tls-tickets

defaults
        log     global
        mode    http
        option  httplog
        option  dontlognull
        timeout connect 5000
        timeout client  50000
        timeout server  50000
        errorfile 400 /etc/haproxy/errors/400.http
        errorfile 403 /etc/haproxy/errors/403.http
        errorfile 408 /etc/haproxy/errors/408.http
        errorfile 500 /etc/haproxy/errors/500.http
        errorfile 502 /etc/haproxy/errors/502.http
        errorfile 503 /etc/haproxy/errors/503.http
        errorfile 504 /etc/haproxy/errors/504.http

frontend front
    mode http
    bind :80
    bind :443 ssl crt /etc/letsencrypt/live/boluotou.tech/haproxy.pem
    http-request redirect scheme https unless { ssl_fc }
    default_backend blog

backend blog
    server server1 127.0.0.1:8080
```

haproxy.pem其实是

```
cat fullchain.pem privkey.pem > haproxy.pem
```

## 支持多个证书

https://serverfault.com/questions/560978/configure-multiple-ssl-certificates-in-haproxy

```
defaults
  log 127.0.0.1 local0
  option tcplog

frontend ft_test
  mode http
  bind 0.0.0.0:443 ssl crt /certs/haproxy1.pem crt /certs/haproxy2.pem 
  use_backend bk_cert1 if { ssl_fc_sni my.example.com } # content switching based on SNI
  use_backend bk_cert2 if { ssl_fc_sni my.example.org } # content switching based on SNI

backend bk_cert1
  mode http
  server srv1 <ip-address2>:80

backend bk_cert2
  mode http
  server srv2 <ip-address3>:80
```
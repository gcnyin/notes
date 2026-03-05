---
created: 2025-01-17
updated: 2025-01-17
---
# Sabaki + Katago

https://blog.web.vg/post/using-sabaki-to-play-go/

安装katago

```
brew install katago
brew list --verbose katago | grep gz
brew list --verbose katago | grep cfg | grep gtp
```

参数gtp -model /path/to/model.txt.gz -config /path/to/gtp_example.cfg

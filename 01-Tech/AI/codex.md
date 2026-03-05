---
created: 2026-01-17
updated: 2026-01-17
---
# Codex

常用 mcp 配置 `~/.codex/config.toml`

在添加前最好手动跑一遍

```
[mcp_servers.filesystem]
command = "npx"
args = ["-y", "@modelcontextprotocol/server-filesystem", "/Users/smith/work", "/Users/smith/.codex"]

[mcp_servers.git]
command = "uvx"
args = ["mcp-server-git"]

[mcp_servers.chrome-devtools]
command = "npx"
args = ["chrome-devtools-mcp@latest"]
```

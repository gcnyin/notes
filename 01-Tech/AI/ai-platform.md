---
created: 2025-12-26
updated: 2025-12-26
---
# AI 平台

本文档列出了常用的 AI 平台及其 API 信息，包括模型、接口地址和 API Key 等配置信息。

## DeepSeek

* 描述: DeepSeek 是一个提供多种 AI 模型的平台。
* 主页: <https://www.deepseek.com/>
* API 文档: <https://api-docs.deepseek.com/zh-cn/>

## 智谱 (Zhipu AI)

* 描述: 智谱 AI 是国内领先的大模型平台，提供多种对话和编程模型。
* 主页: <https://www.zhipu.ai/>
* API 管理: <https://open.bigmodel.cn/usercenter/proj-mgmt/apikeys>
* 支持模型: GLM-4.7

海外站：https://chat.z.ai/ 可以免费网页对话，对内容审查的尺度很宽松。

[claude code + GLM 4.6，保姆级配置教程](https://zhuanlan.zhihu.com/p/1957370685748938170)

## 阿里云百炼 (Aliyun Bailian)

* 描述: 阿里云百炼是一个提供多种大模型服务的平台。
* 主页: <https://bailian.console.aliyun.com/>
* OpenAI 兼容接口:
  * Base URL: <https://dashscope.aliyuncs.com/compatible-mode/v1>

## Moonshot Kimi

* 描述: Moonshot Kimi 是一个提供 AI 模型的平台，支持长文本处理。
* 主页: <https://platform.moonshot.cn/>
* API 地址: <https://api.moonshot.cn>
* OpenAI 兼容 Base URL: <https://api.moonshot.cn/v1>

## OpenRouter

* 描述: OpenRouter 是一个聚合多个 AI 模型提供商的平台。
* 主页: <https://openrouter.ai/>
* API 文档: <https://openrouter.ai/docs>
* Base URL: <https://openrouter.ai/api/v1>
* 特点: 支持多种模型，包括 OpenAI、Anthropic、Google 等

## 小米 MiMo

* 描述: 小米推出的 AI 模型服务平台。
* 主页: <https://platform.xiaomimimo.com>

### OpenAI API 兼容

* 请求地址: <https://api.xiaomimimo.com/v1/chat/completions>

### Anthropic API 兼容

* 请求地址: <https://api.xiaomimimo.com/anthropic/v1/messages>

### Claude Code 配置

配置 MiMo API Key，编辑 `~/.claude/settings.json`：

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://api.xiaomimimo.com/anthropic",
    "ANTHROPIC_AUTH_TOKEN": "$MIMO_API_KEY",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "mimo-v2-flash",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "mimo-v2-flash",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "mimo-v2-flash"
  }
}
```

> 注意: MiMo-V2-Flash 模型暂不适配 Claude Code 思考模式，需在 Thinking mode - false 模式下使用（config 中切换）。

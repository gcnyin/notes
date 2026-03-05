---
created: 2025-01-17
updated: 2026-03-04
---
# Spring Oauth2

做认证的配置类

```java
	@Configuration
	@EnableAuthorizationServer
	public class Oauth2AuthorizationConfig extends AuthorizationServerConfigurerAdapter {
	  @Autowired
	  private DataSource dataSource;

	  @Override
	  public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
		clients.jdbc(dataSource);
	  }
	}
```

configure 方法里可以指定如何做 Authorization。可以 in memory，jdbc。

如果是 jdbc 的话，最后的实现会进入 `JdbcClientDetailsService` 这个类，实现了 `ClientDetailsService` 接口（其实也可以自己手动实现）。

然后发送请求

```shell
curl client1:secret1@localhost:8080/oauth/token \
	-dgrant_type=client_credentials -dscope=any
```

---

这些配置有些问题，之前写过一个 demo，反正还挺复杂的，oauth2 其实需要手动改数据库表结构。

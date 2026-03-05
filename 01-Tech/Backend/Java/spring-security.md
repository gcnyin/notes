---
created: 2025-01-17
updated: 2026-03-04
---
# Spring Security

基于 jwt 的 role-based 验权

- https://www.codejava.net/frameworks/spring-boot/spring-security-jwt-role-based-authorization
- https://www.codejava.net/frameworks/spring-boot/spring-boot-security-role-based-authorization-tutorial

6.0 之后的一些变动

- websecurityconfigureradapter 没有了。https://www.baeldung.com/spring-deprecated-websecurityconfigureradapter
- antMatchers 没有了。https://stackoverflow.com/questions/74683225/updating-to-spring-security-6-0-replacing-removed-and-deprecated-functionality

spring-security-config，可以让你在 RequestMapping 方法上通过注解的方式声明所需要的权限。

- @EnableGlobalMethodSecurity
- @PreAuthorized ?

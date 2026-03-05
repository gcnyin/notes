---
created: 2025-01-17
updated: 2025-01-17
---
# chsh: PAM: Authentication failure

https://askubuntu.com/questions/812420/chsh-always-asking-a-password-and-get-pam-authentication-failure

Changing `/etc/pam.d/chsh` from:

```
auth       required   pam_shells.so
```

to

```
auth       sufficient   pam_shells.so
```
---
created: 2025-01-17
updated: 2025-01-17
---
# cronjob

列出所有cornjob

```
crontab –l
```

创建或修改cronjob

```
crontab -e
```

## 语法

|Cron Job|Command|
|---|---|
|Run Cron Job Every Minute|* * * * * /root/backup.sh|
|Run Cron Job Every 30 Minutes|30 * * * * /root/backup.sh|
|Run Cron Job Every Hour|0 * * * * /root/backup.sh|
|Run Cron Job Every Day at Midnight|0 0 * * * /root/backup.sh|
|Run Cron Job at 2 am Every Day|0 2 * * * /root/backup.sh|
|Run Cron Job Every 1st of the Month|0 0 1 * * /root/backup.sh|
|Run Cron Job Every 15th of the Month|0 0 15 * * /root/backup.sh|
|Run Cron Job on December 1st|0 0 0 12 * /root/backup.sh|
|Run Cron Job on Saturday at Midnight|0 0 * * 6 /root/backup.sh|

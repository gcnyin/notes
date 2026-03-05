---
created: 2025-12-26
updated: 2025-12-26
---
# git

原理介绍

- [这才是真正的GIT——GIT内部原理](https://www.lzane.com/tech/git-internal/)
- [这才是真正的GIT——GIT实用技巧](https://www.lzane.com/tech/git-tips/)
- [这才是真正的GIT——分支合并](https://www.lzane.com/tech/git-merge/)

## 删除分支

```shell
git push origin --delete 远程分支
git branch -D 本地分支
```

## 添加ssh代理

如果你有一个1080端口的socks proxy，想让git ssh走它的话，可以在`~/.ssh/config`里添加这样的配置。

```txt
Host github.com
  Hostname github.com
  ProxyCommand nc -x localhost:1080 %h %p
  # windows用下面这个
  # ProxyCommand connect -S 127.0.0.1:1080 -a none %h %p
```

## 合并多个commit

Git 中，可以通过 `git rebase` 命令的交互式变基（interactive rebase）功能来合并多个提交（commit）。以下是具体步骤：

### 1. 启动交互式变基

- 首先，确定你想要合并的提交范围。假设你想合并最近的几个提交，可以使用以下命令：

     ```bash
     git rebase -i HEAD~N
     ```

     其中 `N` 是你想要合并的提交数量。例如，如果你希望合并最近的 3 个提交，可以使用：

     ```bash
     git rebase -i HEAD~3
     ```

### 2. 编辑提交历史

- 执行上述命令后，Git 会打开一个文本编辑器（通常是默认的编辑器，如 Vim 或 Nano），列出你选择的提交。
- 编辑器中的内容类似于以下格式：

     ```shell
     pick 1234567 Commit message 1
     pick 2345678 Commit message 2
     pick 3456789 Commit message 3
     ```

- 要合并这些提交，你需要将除了第一个提交之外的其他提交的 `pick` 改为 `squash` 或简写为 `s`。例如：

     ```shell
     pick 1234567 Commit message 1
     squash 2345678 Commit message 2
     squash 3456789 Commit message 3
     ```

     这样，Git 会将第二个和第三个提交合并到第一个提交中。

### 3. 编辑合并后的提交信息

- 保存并关闭编辑器后，Git 会开始变基操作。如果一切顺利，Git 会再次打开编辑器，让你编辑合并后的提交信息。
- 在这个编辑器中，你可以编辑合并后的提交信息，将多个提交的描述整合成一个清晰的描述。
- 保存并关闭编辑器后，变基操作完成。

### 4. 处理冲突（如果有）

- 如果在变基过程中出现冲突，Git 会暂停变基并提示你解决冲突。解决冲突后，使用以下命令继续变基：

     ```bash
     git add <文件名>
     git rebase --continue
     ```

- 如果需要终止变基，可以使用：

     ```bash
     git rebase --abort
     ```

### 5. 推送更改

- 如果你已经将这些提交推送到远程仓库，由于变基会重写提交历史，你需要使用强制推送：

     ```bash
     git push origin <分支名> --force
     ```

     注意：强制推送会覆盖远程仓库的历史记录，可能会导致其他协作者出现问题。在团队协作中，应谨慎使用。

### 总结

通过交互式变基，你可以将多个提交合并为一个提交，使提交历史更加清晰。但请注意，变基会改变提交历史，因此在公共分支上使用时需要谨慎。

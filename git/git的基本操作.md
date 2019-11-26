# Git的基本使用

## 菜鸡Git工作流
- 在github上创建仓库
- 在本地clone仓库
- 每次工作前都先git pull origin master
- 每次做完都git push origin master


## 菜鸡Git基本操作

### 克隆仓库

>  git clone https://github.com/ZPJay/Garbage.git

### 拉取

> git pull origin master
> 拉取最新版本并合并到本地

### 提交

> git add .
> git commit -m '日志'
> git push origin master

### 查看状态
> git status

### 查看日志

> git log

### 回滚

> git reflog
> git reset --hard 40a9a83


``` git
fdb70fe HEAD@{0}: pull origin newpbft: Fast-forward
40a9a83 HEAD@{1}: checkout: moving from guan to master
b3fa4c3 HEAD@{2}: commit: copy from newpbft, first init
71bf0ec HEAD@{3}: checkout: moving from newpbft to guan
71bf0ec HEAD@{4}: commit: 1. add moveStore() to clean up certStore and blockStore.
git reset --hard 40a9a83
```

### 配置git账号和用户名

- 输入你的名字：$ git config --global user.name "myname"

- 输入你的email了：$ git config --global user.email "myemail@email.com"

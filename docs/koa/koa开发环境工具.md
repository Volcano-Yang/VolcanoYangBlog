# 一、pm2

> 文章：https://www.cnblogs.com/chyingp/p/pm2-documentation.html
>
> 启动最好用pm2 可以避免终端阻塞和终端关闭后进程也响应关闭 日志监控 崩溃重启等很好用的功能

全局安装，简直不能更简单。

```powershell
npm install -g pm2
```

## 入门教程

### （1）启动

挑我们最爱的express应用来举例。一般我们都是通过`npm start`启动应用，其实就是调用`node ./bin/www`。那么，换成pm2就是

```powershell
pm2 start ./bin/www --watch
```

注意，这里用了`--watch`参数，意味着当你的express应用代码发生变化时，pm2会帮你重启服务，多贴心。

### （2）重启

```powershell
pm2 restart app.js
```

### （3）停止

停止特定的应用。可以先通过`pm2 list`获取应用的名字（--name指定的）或者进程id。

```powershell
pm2 stop app_name|app_id
```

如果要停止所有应用，可以

```powershell
pm2 stop all
```

### 查看进程状态

```powershell
pm2 list
```

```powershell
[root@iZ94wb7tioqZ pids]# pm2 describe 0
Describing process with id 0 - name oc-server
┌───────────────────┬──────────────────────────────────────────────────────────────┐
│ status            │ online                                                       │
│ name              │ oc-server                                                    │
│ id                │ 0                                                            │
│ path              │ /data/file/qiquan/over_the_counter/server/bin/www            │
│ args              │                                                              │
│ exec cwd          │ /data/file/qiquan/over_the_counter/server                    │
│ error log path    │ /data/file/qiquan/over_the_counter/server/logs/app-err-0.log │
│ out log path      │ /data/file/qiquan/over_the_counter/server/logs/app-out-0.log │
│ pid path          │ /root/.pm2/pids/oc-server-0.pid                              │
│ mode              │ fork_mode                                                    │
│ node v8 arguments │                                                              │
│ watch & reload    │                                                             │
│ interpreter       │ node                                                         │
│ restarts          │ 293                                                          │
│ unstable restarts │ 0                                                            │
│ uptime            │ 87m                                                          │
│ created at        │ 2016-08-26T08:13:43.705Z                                     │
└───────────────────┴──────────────────────────────────────────────────────────────┘
```

入门太简单了，没什么好讲的。直接上官方文档：http://pm2.keymetrics.io/docs/usage/quick-start

# 二、nodemon

1. 全局安装nodemon 

   > npm install -g nodemon

2. 使用起来很方便，直接用nodemon命令字代替node命令字，启动就可以了。后面如果修改了代码，保存后会自动帮助我们重启。

![image-20210207170507557](https://qny.volcanoblog.cn/markdown/image-20210207170507557.png)

3. 如果你不全局安装一个npm包，你想要启动它，只有两种方法：

   > - 使用npx指令
   > - 使用npm script，修改package.json

# 三、node断点调试

1. 配置vscode启动文件

   ![image-20210207173237839](https://qny.volcanoblog.cn/markdown/image-20210207173237839.png)

   

   ![image-20210207174329249](https://qny.volcanoblog.cn/markdown/image-20210207174329249.png)

2. 在你需要断点的地方打红点，然后按下f5开始启动

   ![image-20210207173323677](https://qny.volcanoblog.cn/markdown/image-20210207173323677.png)



## 更多有用的配置

### （1）如何既可以断点调试又可以自动重启

![image-20210207174953400](https://qny.volcanoblog.cn/markdown/image-20210207174953400.png)

### （2）node启动当前文件

![image-20210207174156309](https://qny.volcanoblog.cn/markdown/image-20210207174156309-20210207175127803.png)

# 四、node环境配置绝对路径拒绝硬编码

我们在编码时经常会使用到相对路径，这样的硬编码是不友好的，最好换成绝对路径方便代码的拓展。

```javascript
// bad
requireDirectory(module, "./api", { visit: whenLoadModule });
```

```javascript
// good
const apiDirPath = process.cwd();
// apiDirPath : '/Users/mac/mycode/koa-study'
requireDirectory(module, `${apiDirPath}/demo5/api`, {
  visit: whenLoadModule,
});
```






# koa服务部署不完全指南

1. 利用ssh链接你的esc，配置node，npm，git环境
2. 复制代码
3. 配置ngnix 端口转发服务
![image-20210209104622417](http://qny.volcanoblog.cn/markdown/image-20210209104622417.png)
4. 利用pm2启动node服务（node服务启动最好用pm2 可以避免终端阻塞和终端关闭后进程也响应关闭 日志监控 崩溃重启等很好用的功能）
5. 配置https （免费的证书提供商 lets encrypt 三月续期一次；小程序后端 支持备案过的域名 https的服务；注意https是443端口）





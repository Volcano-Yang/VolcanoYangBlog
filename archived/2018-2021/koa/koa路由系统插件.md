# koa路由系统插件知识笔记

## 一、自己手写实现简单的koa路由系统

> koa本身是一个高级应用框架之下的框架，所以很多东西都是精简的，需要我们自己根据需要引入插件，本身是没有路由系统的。本身要做路由引导，可以简单的做逻辑处理。

![image-20210201102541811](https://qny.volcanoblog.cn/markdown/image-20210201102541811.png)

> 需要返回什么给客户端，直接传给ctx.body就可以，koa自动帮我们做了序列化操作。

## 二、koa-router插件，三步实现简单的路由

Koa-router:https://github.com/ZijianHe/koa-router

```javascript
var Koa = require('koa');
var Router = require('koa-router');

// 第一步：实例化koa-router
var app = new Koa();
var router = new Router();

// 第二步：给koa-router对象添加路由和对应的处理函数
router.get('/', (ctx, next) => {
  // 后面会把这个函数注册成中间件，所以这里放心使用ctx和next
  // ctx.router available
});

// 第三步：将koa-router对象的所有路由和处理函数注册成为中间件
app
  .use(router.routes())
  .use(router.allowedMethods());
```

## 三、常见类型请求的处理

```javascript
//根据需要修改
router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello World!';
  })
  .post('/users', (ctx, next) => {
    // ...
  })
  .put('/users/:id', (ctx, next) => {
    // ...
  })
  .del('/users/:id', (ctx, next) => {
    // ...
  })
  .all('/users/:id', (ctx, next) => {
    // ...
  });
```

## 四、router中的参数传递方式

### （1）地址query

> 路由：/users
>
> 地址：localhost:4000/users?q=1
>
> 取值：ctx.query
>
> 结果：{ q: 1 }

### （2）获取router params

>路由：/users/:id
>
>地址：localhost:4000/users/1
>
>取值方式：ctx.params
>
>结果：{ id: 1}

### （3）请求体body

> 路由：/users
>
> 地址：localhost:4000/users，content-type为application/json，参数{"name": "zj"}
>
> 取值：
> 先提前安装 koa-bodyparser：
> const bodyParser = require("koa-bodyparser");
> app.use(bodyParser());
> 再：ctx.request.body
>
> 结果：{ "name": "zj" }

![image-20210208113407464](https://qny.volcanoblog.cn/markdown/image-20210208113407464.png)

## 五、将api router抽离到单独文件

> 入口代码导入抽离逻辑代码，上层代码导入下层代码

```javascript
// demo/api/api1.js

const Router = require("koa-router");

const router = new Router();

router.get("/api1", async (ctx, next) => {
  ctx.body = "api1";
});

module.exports = router;

```

```javascript
// demo/app.js

const Koa = require("koa");
const api1 = require("./api/api1");
const api2 = require("./api/api2");

const app = new Koa();
const port = 3000;

app.use(api1.routes()).use(api1.allowedMethods());
app.use(api2.routes()).use(api2.allowedMethods());

app.listen(3000);
console.log("程序已经启动，在" + port + "端口监听");

```



## 六、router.prefix()将路径中公共的部分先抽离出来

```javascript
const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
```

## 七、requireDirectory实现路由自动加载

> 思路：
>
> 1.自动去寻找文件夹中的api文件 require进来
>
> 2.router  require进来以后，自动注册到app中
> 
> 实现：requireDirectory
> https://www.npmjs.com/package/require-directory

### 简单用法：

```javascript
const Koa = require("koa");
const Router = require("koa-router");

//requireDirectory是一个直接导出的方法
const requireDirectory = require("require-directory");
//requireDirectory方法执行之后会返回一个全部路由的对象
const routers = requireDirectory(module, "./api");

const app = new Koa();
const port = 3000;

// 通过便利把每一个router注册到appshang
for (let routerName in routers) {
  if (routers[routerName] instanceof Router)
    app.use(routers[routerName].routes()).use(routers[routerName].allowedMethods());
}

app.listen(port);
console.log("程序已经启动，在" + port + "端口监听");
```

### 高级用法

```javascript
const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const port = 3000;

function whenLoadModule(router) {
  if (router instanceof Router)
    app.use(router.routes()).use(router.allowedMethods());
}

//requireDirectory是一个直接导出的方法
const requireDirectory = require("require-directory");
//requireDirectory方法也支持opitons参数，配置响应的回调函数
requireDirectory(module, "./api", { visit: whenLoadModule });

app.listen(port);
console.log("程序已经启动，在" + port + "端口监听");
```

![a4cfd553a12bf420170925a20ccb50d3_r](https://qny.volcanoblog.cn/markdown/a4cfd553a12bf420170925a20ccb50d3_r.jpg)

> 少抱怨，多思考。持续努力，必有收获。
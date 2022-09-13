# 一、koa是什么？

Koa 应用程序是一个包含一组中间件函数的对象，它是按照类似堆栈的方式组织和执行的。

>对koa的意义理解：我们深知企业级应用在追求规范和共建的同时，还需要考虑如何平衡不同团队之间的差异，求同存异。所以我们没有选择社区常见框架的大集市模式（集成如数据库、模板引擎、前端框架等功能），而是专注于提供 Web 开发的核心功能和一套灵活可扩展的插件机制。我们不会做出技术选型，因为固定的技术选型会使框架的扩展性变差，无法满足各种定制需求。通过 Egg，团队的架构师和技术负责人可以非常容易地基于自身的技术架构在 KOA基础上扩展出适合自身业务场景的框架。
>
>简单的说，一个上层框架就是把 `koa + 需要的插件列表 + 默认的配置 + 自定义的加载规范` 封装成一个独立的 npm 包，应用开发者直接基于这个框架来开发业务。
>
>让t4、t5的工程师轻松达到t6、t7的业务水平
>
>https://www.zhihu.com/question/294406281/answer/497817723

# 二、学习最基本的koa的重点在哪？

- 如何初始化一个koaApp
- 中间件的添加和其洋葱模型的执行顺序
- context上下文对象

对的最基本的koa知识点只有这么多，koa的官网文档也只不过只有几页ppt的内容，koa是一个用来孵化更高级的框架的蛋，其他更加完善的内容都是他的插件。

# 三、知识点记录

## 1.初始化koaApp，实现基本的hello world应用

```javascript
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
```

## 2.添加中间件，app.use(function(ctx,next))

#### (1) 支持链式调用

将给定的中间件方法添加到此应用程序。`app.use()` 返回 `this`, 因此可以链式表达.

```javascript
app.use(someMiddleware)
app.use(someOtherMiddleware)
app.listen(3000)
```

它等同于

```javascript
app.use(someMiddleware)
  .use(someOtherMiddleware)
  .listen(3000)
```

#### (2)两个常用参数

有两个很重要的默认参数，ctx和next。这两个参数都是全局变量，ctx代表上下文，next代表下一个中间件

## 2.中间件执行顺序，洋葱模型

![image-20210131164632617](https://qny.volcanoblog.cn/markdown/image-20210131164632617.png)

![](https://qny.volcanoblog.cn/markdown/image-20210131164723587-20210131164956510.png)

`由next将一个中间件分成洋葱模型的两边`

为了保证洋葱模型的正确执行，需要我们在中间函数中加上async和await

![image-20210131164901628](https://qny.volcanoblog.cn/markdown/image-20210131164901628.png)



## 3.设置监听端口，app.listen(...)

Koa 应用程序不是 HTTP 服务器的1对1展现。 可以将一个或多个 Koa 应用程序安装在一起以形成具有单个HTTP服务器的更大应用程序。

创建并返回 HTTP 服务器，将给定的参数传递给 `Server#listen()`。这些内容都记录在 [nodejs.org](http://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback).

以下是一个无作用的 Koa 应用程序被绑定到 `3000` 端口：

```js
const Koa = require('koa');
const app = new Koa();
app.listen(3000);
```

这里的 `app.listen(...)` 方法只是以下方法的语法糖:

```js
const http = require('http');
const Koa = require('koa');
const app = new Koa();
http.createServer(app.callback()).listen(3000);
```

## 4.重要koa对象，上下文(Context)

Koa Context 将 node 的 `request` 和 `response` 对象封装到单个对象ctx中，为编写 Web 应用程序和 API 提供了许多有用的方法。 这些操作在 HTTP 服务器开发中频繁使用，它们被添加到此级别而不是更高级别的框架，这将强制中间件重新实现此通用功能。

每个请求都将创建一个 `Context`，并在中间件中作为接收器引用，或者 `ctx` 标识符，如以下代码片段所示：

```javascript
app.use(async ctx => {
  ctx; // 这是 Context
  ctx.request; // 这是 koa Request
  ctx.response; // 这是 koa Response
});
```

### ctx.req

**Node** 的 `request` 对象.

### ctx.res

**Node** 的 `response` 对象.

绕过 Koa 的 response 处理是 **不被支持的**. 应避免使用以下 node 属性：

- `res.statusCode`
- `res.writeHead()`
- `res.write()`
- `res.end()`

### ctx.request

**koa** 的 `Request` 对象.

### ctx.response

**koa** 的 `Response` 对象.

### ctx.throw([status], [msg], [properties])

用来抛出一个包含 `.status` 属性错误的帮助方法，其默认值为 `500`。这样 Koa 就可以做出适当地响应。

允许以下组合：

```js
ctx.throw(400);
ctx.throw(400, 'name required');
ctx.throw(400, 'name required', { user: user });
```

### ctx.cookies.get(name, [options])

koa 使用 [cookies](https://github.com/pillarjs/cookies) 模块，其中只需传递参数。

### ctx.cookies.set(name, value, [options])

通过 `options` 设置 cookie `name` 的 `value` :

- maxAge: 一个数字, 表示从Date.now() 得到的毫秒数.

- `expires`: 一个 `Date` 对象, 表示 cookie 的到期日期 (默认情况下在会话结束时过期).
- `path`: 一个字符串, 表示 cookie 的路径 (默认是`/`).
- `domain`: 一个字符串, 指示 cookie 的域 (无默认值).
- `secure`: 一个布尔值, 表示 cookie 是否仅通过 HTTPS 发送 (HTTP 下默认为 `false`, HTTPS 下默认为 `true`). [阅读有关此参数的更多信息](https://github.com/pillarjs/cookies#secure-cookies).
- `httpOnly`: 一个布尔值, 表示 cookie 是否仅通过 HTTP(S) 发送，, 且不提供给客户端 JavaScript (默认为 `true`).
- `sameSite`: 一个布尔值或字符串, 表示该 cookie 是否为 "相同站点" cookie (默认为 `false`). 可以设置为 `'strict'`, `'lax'`, `'none'`, 或 `true` (映射为 `'strict'`).
- `signed`: 一个布尔值, 表示是否要对 cookie 进行签名 (默认为 `false`). 如果为 `true`, 则还会发送另一个后缀为 `.sig` 的同名 cookie, 使用一个 27-byte url-safe base64 SHA1 值来表示针对第一个 [Keygrip](https://www.npmjs.com/package/keygrip) 键的 *cookie-name*=*cookie-value* 的哈希值. 此签名密钥用于检测下次接收 cookie 时的篡改.
- `overwrite`: 一个布尔值, 表示是否覆盖以前设置的同名的 cookie (默认是 `false`). 如果是 true, 在同一个请求中设置相同名称的所有 Cookie（无论路径或域）是否在设置此Cookie 时从 Set-Cookie 消息头中过滤掉.

koa 使用传递简单参数的 [cookies](https://github.com/pillarjs/cookies) 模块。

## 请求(Request)

Koa `Request` 对象是在 node 的 原生请求对象之上的抽象，提供了诸多对 HTTP 服务器开发有用的功能。

### API

### request.header

请求头对象。这与 node [`http.IncomingMessage`](https://nodejs.org/api/http.html#http_class_http_incomingmessage) 上的 [`headers`](https://nodejs.org/api/http.html#http_message_headers) 字段相同

### request.header=

设置请求头对象。

### request.headers

请求头对象。别名为 `request.header`.

### request.headers=

设置请求头对象。别名为 `request.header=`.

### request.method

请求方法。

### request.method=

设置请求方法，对于实现诸如 `methodOverride()` 的中间件是有用的。

### request.length

返回以数字返回请求的 Content-Length，或 `undefined`。

### request.url

获取请求 URL.

### request.url=

设置请求 URL, 对 url 重写有用。

### request.originalUrl

获取请求原始URL。

### request.origin

获取URL的来源，包括 `protocol` 和 `host`。

```js
ctx.request.origin
// => http://example.com
```

### request.href

获取完整的请求URL，包括 `protocol`，`host` 和 `url`。

```js
ctx.request.href;
// => http://example.com/foo/bar?q=1
```

### request.path

获取请求路径名。

### request.path=

设置请求路径名，并在存在时保留查询字符串。

### request.querystring

根据 `?` 获取原始查询字符串.

### request.querystring=

设置原始查询字符串。

### request.search

使用 `?` 获取原始查询字符串。

### request.search=

设置原始查询字符串。

### request.host

存在时获取主机（hostname:port）。当 `app.proxy` 是 **true** 时支持 `X-Forwarded-Host`，否则使用 `Host`。

### request.hostname

存在时获取主机名。当 `app.proxy` 是 **true** 时支持 `X-Forwarded-Host`，否则使用 `Host`。

如果主机是 IPv6, Koa 解析到 [WHATWG URL API](https://nodejs.org/dist/latest-v8.x/docs/api/url.html#url_the_whatwg_url_api), *注意* 这可能会影响性能。

### request.URL

获取 WHATWG 解析的 URL 对象。

### request.type

获取请求 `Content-Type`, 不含 "charset" 等参数。

> 译者注: 这里其实是只获取 *mime-type*, 详见[源码及其注释](https://github.com/koajs/koa/blob/eda27608f7d39ede86d7b402aae64b1867ce31c6/lib/request.js#L639)

```js
const ct = ctx.request.type;
// => "image/png"
```

### request.charset

存在时获取请求字符集，或者 `undefined`：

```js
ctx.request.charset;
// => "utf-8"
```

### request.query

获取解析的查询字符串, 当没有查询字符串时，返回一个空对象。请注意，此 getter _不_ 支持嵌套解析。

例如 "color=blue&size=small":

```js
{
  color: 'blue',
  size: 'small'
}
```

### request.query=

将查询字符串设置为给定对象。 请注意，此 setter _不_ 支持嵌套对象。

```js
ctx.query = { next: '/login' };
```

### request.fresh

检查请求缓存是否“新鲜”，也就是内容没有改变。此方法用于 `If-None-Match` / `ETag`, 和 `If-Modified-Since` 和 `Last-Modified` 之间的缓存协商。 在设置一个或多个这些响应头后应该引用它。

```js
// 新鲜度检查需要状态20x或304
ctx.status = 200;
ctx.set('ETag', '123');

// 缓存是好的
if (ctx.fresh) {
  ctx.status = 304;
  return;
}

// 缓存是陈旧的
// 获取新数据
ctx.body = await db.find('something');
```

### request.stale

与 `request.fresh` 相反.

### request.protocol

返回请求协议，“https” 或 “http”。当 `app.proxy` 是 **true** 时支持 `X-Forwarded-Proto`。

### request.secure

通过 `ctx.protocol == "https"` 来检查请求是否通过 TLS 发出。

### request.ip

请求远程地址。 当 `app.proxy` 是 **true** 时支持 `X-Forwarded-Proto`。

### request.ips

当 `X-Forwarded-For` 存在并且 `app.proxy` 被启用时，这些 ips 的数组被返回，从上游 - >下游排序。 禁用时返回一个空数组。

例如，如果值是 "client, proxy1, proxy2"，将会得到数组 `["client", "proxy1", "proxy2"]`。

大多数反向代理（nginx）都通过 `proxy_add_x_forwarded_for` 设置了 x-forwarded-for，这带来了一定的安全风险。恶意攻击者可以通过伪造 `X-Forwarded-For` 请求头来伪造客户端的ip地址。 客户端发送的请求具有 'forged' 的 `X-Forwarded-For` 请求头。 在由反向代理转发之后，`request.ips` 将是 ['forged', 'client', 'proxy1', 'proxy2']。

Koa 提供了两种方式来避免被绕过。

如果您可以控制反向代理，则可以通过调整配置来避免绕过，或者使用 koa 提供的 `app.proxyIpHeader` 来避免读取 `x-forwarded-for` 获取 ips。

```js
const app = new Koa({
  proxy: true,
  proxyIpHeader: 'X-Real-IP',
});
```

如果您确切知道服务器前面有多少个反向代理，则可以通过配置 `app.maxIpsCount` 来避免读取用户的伪造的请求头：

```js
const app = new Koa({
  proxy: true,
  maxIpsCount: 1, // 服务器前只有一个代理
});

// request.header['X-Forwarded-For'] === [ '127.0.0.1', '127.0.0.2' ];
// ctx.ips === [ '127.0.0.2' ];
```

### request.subdomains

以数组形式返回子域。

子域是应用程序主域之前主机的点分隔部分。默认情况下，应用程序的域名假定为主机的最后两个部分。这可以通过设置 `app.subdomainOffset` 来更改。

例如，如果域名为“tobi.ferrets.example.com”：

如果 `app.subdomainOffset` 未设置, `ctx.subdomains` 是 `["ferrets", "tobi"]`. 如果 `app.subdomainOffset` 是 3, `ctx.subdomains` 是 `["tobi"]`.

### request.is(types...)

检查传入请求是否包含 `Content-Type` 消息头字段， 并且包含任意的 mime `type`。 如果没有请求主体，返回 `null`。 如果没有内容类型，或者匹配失败，则返回 `false`。 反之则返回匹配的 content-type。

```js
// 使用 Content-Type: text/html; charset=utf-8
ctx.is('html'); // => 'html'
ctx.is('text/html'); // => 'text/html'
ctx.is('text/*', 'text/html'); // => 'text/html'

// 当 Content-Type 是 application/json 时
ctx.is('json', 'urlencoded'); // => 'json'
ctx.is('application/json'); // => 'application/json'
ctx.is('html', 'application/*'); // => 'application/json'

ctx.is('html'); // => false
```

例如，如果要确保仅将图像发送到给定路由：

```js
if (ctx.is('image/*')) {
  // 处理
} else {
  ctx.throw(415, 'images only!');
}
```

### 内容协商

Koa 的 `request` 对象包括由 [accepts](http://github.com/expressjs/accepts) 和 [negotiator](https://github.com/federomero/negotiator) 提供的内容协商实用函数。

这些实用函数是：

- `request.accepts(types)`
- `request.acceptsEncodings(types)`
- `request.acceptsCharsets(charsets)`
- `request.acceptsLanguages(langs)`

如果没有提供类型，则返回 **所有** 可接受的类型。

如果提供多种类型，将返回最佳匹配。 如果没有找到匹配项，则返回一个`false`，你应该向客户端发送一个`406 "Not Acceptable"` 响应。

如果接收到任何类型的接收头，则会返回第一个类型。 因此，你提供的类型的顺序很重要。

### request.accepts(types)

检查给定的 `type(s)` 是否可以接受，如果 `true`，返回最佳匹配，否则为 `false`。 `type` 值可能是一个或多个 mime 类型的字符串，如 `application/json`，扩展名称如 `json`，或数组 `["json", "html", "text/plain"]`。

```js
// Accept: text/html
ctx.accepts('html');
// => "html"

// Accept: text/*, application/json
ctx.accepts('html');
// => "html"
ctx.accepts('text/html');
// => "text/html"
ctx.accepts('json', 'text');
// => "json"
ctx.accepts('application/json');
// => "application/json"

// Accept: text/*, application/json
ctx.accepts('image/png');
ctx.accepts('png');
// => false

// Accept: text/*;q=.5, application/json
ctx.accepts(['html', 'json']);
ctx.accepts('html', 'json');
// => "json"

// No Accept header
ctx.accepts('html', 'json');
// => "html"
ctx.accepts('json', 'html');
// => "json"
```

你可以根据需要多次调用 `ctx.accepts()`，或使用 switch：

```js
switch (ctx.accepts('json', 'html', 'text')) {
  case 'json': break;
  case 'html': break;
  case 'text': break;
  default: ctx.throw(406, 'json, html, or text only');
}
```

### request.acceptsEncodings(encodings)

检查 `encodings` 是否可以接受，返回最佳匹配为 `true`，否则为 `false`。 请注意，您应该将`identity` 作为编码之一！

```js
// Accept-Encoding: gzip
ctx.acceptsEncodings('gzip', 'deflate', 'identity');
// => "gzip"

ctx.acceptsEncodings(['gzip', 'deflate', 'identity']);
// => "gzip"
```

当没有给出参数时，所有接受的编码将作为数组返回：

```js
// Accept-Encoding: gzip, deflate
ctx.acceptsEncodings();
// => ["gzip", "deflate", "identity"]
```

请注意，如果客户端显式地发送 `identity;q=0`，那么 `identity` 编码（这意味着没有编码）可能是不可接受的。 虽然这是一个边缘的情况，你仍然应该处理这种方法返回 `false` 的情况。

### request.acceptsCharsets(charsets)

检查 `charsets` 是否可以接受，在 `true` 时返回最佳匹配，否则为 `false`。

```js
// Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5
ctx.acceptsCharsets('utf-8', 'utf-7');
// => "utf-8"

ctx.acceptsCharsets(['utf-7', 'utf-8']);
// => "utf-8"
```

当没有参数被赋予所有被接受的字符集将作为数组返回：

```js
// Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5
ctx.acceptsCharsets();
// => ["utf-8", "utf-7", "iso-8859-1"]
```

### request.acceptsLanguages(langs)

检查 `langs` 是否可以接受，如果为 `true`，返回最佳匹配，否则为 `false`。

```js
// Accept-Language: en;q=0.8, es, pt
ctx.acceptsLanguages('es', 'en');
// => "es"

ctx.acceptsLanguages(['en', 'es']);
// => "es"
```

当没有参数被赋予所有接受的语言将作为数组返回：

```js
// Accept-Language: en;q=0.8, es, pt
ctx.acceptsLanguages();
// => ["es", "pt", "en"]
```

### request.idempotent

检查请求是否是幂等的。

### request.socket

返回请求套接字。

### request.get(field)

返回请求头(header), `field` 不区分大小写.

## 响应(Response)

Koa `Response` 对象是在 node 的原生响应对象之上的抽象，提供了诸多对 HTTP 服务器开发有用的功能。

### API

### response.header

响应头对象。

### response.headers

响应头对象。别名是 `response.header`。

### response.socket

响应套接字。 作为 `request.socket` 指向 net.Socket 实例。

### response.status

获取响应状态。默认情况下，`response.status` 设置为 `404` 而不是像 node 的 `res.statusCode` 那样默认为 `200`。

### response.status=

通过数字代码设置响应状态：

- 100 "continue"
- 101 "switching protocols"
- 102 "processing"
- 200 "ok"
- 201 "created"
- 202 "accepted"
- 203 "non-authoritative information"
- 204 "no content"
- 205 "reset content"
- 206 "partial content"
- 207 "multi-status"
- 208 "already reported"
- 226 "im used"
- 300 "multiple choices"
- 301 "moved permanently"
- 302 "found"
- 303 "see other"
- 304 "not modified"
- 305 "use proxy"
- 307 "temporary redirect"
- 308 "permanent redirect"
- 400 "bad request"
- 401 "unauthorized"
- 402 "payment required"
- 403 "forbidden"
- 404 "not found"
- 405 "method not allowed"
- 406 "not acceptable"
- 407 "proxy authentication required"
- 408 "request timeout"
- 409 "conflict"
- 410 "gone"
- 411 "length required"
- 412 "precondition failed"
- 413 "payload too large"
- 414 "uri too long"
- 415 "unsupported media type"
- 416 "range not satisfiable"
- 417 "expectation failed"
- 418 "I'm a teapot"
- 422 "unprocessable entity"
- 423 "locked"
- 424 "failed dependency"
- 426 "upgrade required"
- 428 "precondition required"
- 429 "too many requests"
- 431 "request header fields too large"
- 500 "internal server error"
- 501 "not implemented"
- 502 "bad gateway"
- 503 "service unavailable"
- 504 "gateway timeout"
- 505 "http version not supported"
- 506 "variant also negotiates"
- 507 "insufficient storage"
- 508 "loop detected"
- 510 "not extended"
- 511 "network authentication required"

**注意**: 不用太在意记住这些字符串, 如果你写错了,可以查阅这个列表随时更正.

由于 `response.status` 默认设置为 `404`，因此发送没有 body 且状态不同的响应的操作如下：

```js
ctx.response.status = 200;

// 或其他任何状态
ctx.response.status = 204;
```

### response.message

获取响应的状态消息. 默认情况下, `response.message` 与 `response.status` 关联.

### response.message=

将响应的状态消息设置为给定值。

### response.length=

将响应的 Content-Length 设置为给定值。

### response.length

以数字返回响应的 Content-Length，或者从`ctx.body`推导出来，或者`undefined`。

### response.body

获取响应主体。

### response.body=

将响应体设置为以下之一：

- `string` 写入
- `Buffer` 写入
- `Stream` 管道
- `Object` || `Array` JSON-字符串化
- `null` 无内容响应

如果 `response.status` 未被设置, Koa 将会自动设置状态为 `200` 或 `204`。

Koa 没有防范作为响应体的所有内容 - 函数没有有意义地序列化，返回布尔值可能会根据您的应用程序而有意义。并且当错误生效时，它可能无法正常工作 错误的属性无法枚举。 我们建议在您的应用中添加中间件，以确定每个应用的正文类型。 示例中间件可能是：

```js
app.use(async (ctx, next) => {
  await next()

  ctx.assert.equal('object', typeof ctx, 500, '某些开发错误')
})
```

#### String

Content-Type 默认为 `text/html` 或 `text/plain`, 同时默认字符集是 utf-8。Content-Length 字段也是如此。

#### Buffer

Content-Type 默认为 `application/octet-stream`, 并且 Content-Length 字段也是如此。

#### Stream

Content-Type 默认为 `application/octet-stream`。

每当流被设置为响应主体时，`.onerror` 作为侦听器自动添加到 `error` 事件中以捕获任何错误。此外，每当请求关闭（甚至过早）时，流都将被销毁。如果你不想要这两个功能，请勿直接将流设为主体。例如，当将主体设置为代理中的 HTTP 流时，你可能不想要这样做，因为它会破坏底层连接。

参阅: https://github.com/koajs/koa/pull/612 获取更多信息。

以下是流错误处理的示例，而不会自动破坏流：

```js
const PassThrough = require('stream').PassThrough;

app.use(async ctx => {
  ctx.body = someHTTPStream.on('error', (err) => ctx.onerror(err)).pipe(PassThrough());
});
```

#### Object

Content-Type 默认为 `application/json`. 这包括普通的对象 `{ foo: 'bar' }` 和数组 `['foo', 'bar']`。

### response.get(field)

不区分大小写获取响应头字段值 `field`。

```js
const etag = ctx.response.get('ETag');
```

### response.has(field)

如果当前在响应头中设置了由名称标识的消息头，则返回 `true`. 消息头名称匹配不区分大小写.

```js
const rateLimited = ctx.response.has('X-RateLimit-Limit');
```

### response.set(field, value)

设置响应头 `field` 到 `value`:

```js
ctx.set('Cache-Control', 'no-cache');
```

### response.append(field, value)

用值 `val` 附加额外的消息头 `field`。

```js
ctx.append('Link', '<http://127.0.0.1/>');
```

### response.set(fields)

用一个对象设置多个响应头`fields`:

```js
ctx.set({
  'Etag': '1234',
  'Last-Modified': date
});
```

这将委托给 [setHeader](https://nodejs.org/dist/latest/docs/api/http.html#http_request_setheader_name_value) ，它通过指定的键设置或更新消息头，并且不重置整个消息头。

### response.remove(field)

删除消息头 `field`。

### response.type

获取响应 `Content-Type`, 不含 "charset" 等参数。

> 译者注: 这里其实是只获取 *mime-type*, 详见[源码及其注释](https://github.com/koajs/koa/blob/eda27608f7d39ede86d7b402aae64b1867ce31c6/lib/response.js#L371)

```js
const ct = ctx.type;
// => "image/png"
```

### response.type=

设置响应 `Content-Type` 通过 mime 字符串或文件扩展名。

```js
ctx.type = 'text/plain; charset=utf-8';
ctx.type = 'image/png';
ctx.type = '.png';
ctx.type = 'png';
```

注意: 在适当的情况下为你选择 `charset`, 比如 `response.type = 'html'` 将默认是 "utf-8". 如果你想覆盖 `charset`, 使用 `ctx.set('Content-Type', 'text/html')` 将响应头字段设置为直接值。

### response.is(types...)

非常类似 `ctx.request.is()`. 检查响应类型是否是所提供的类型之一。这对于创建操纵响应的中间件特别有用。

例如, 这是一个中间件，可以削减除流之外的所有HTML响应。

```js
const minify = require('html-minifier');

app.use(async (ctx, next) => {
  await next();

  if (!ctx.response.is('html')) return;

  let body = ctx.body;
  if (!body || body.pipe) return;

  if (Buffer.isBuffer(body)) body = body.toString();
  ctx.body = minify(body);
});
```

### response.redirect(url, [alt])

执行 [302] 重定向到 `url`.

字符串 “back” 是特别提供 Referrer 支持的，当 Referrer 不存在时，使用 `alt` 或 “/”。

```js
ctx.redirect('back');
ctx.redirect('back', '/index.html');
ctx.redirect('/login');
ctx.redirect('http://google.com');
```

要更改 “302” 的默认状态，只需在该调用之前或之后给 `status` 赋值。要变更主体请在此调用之后:

```js
ctx.status = 301;
ctx.redirect('/cart');
ctx.body = 'Redirecting to shopping cart';
```

### response.attachment([filename], [options])

将 `Content-Disposition` 设置为 “附件” 以指示客户端提示下载。(可选)指定下载的 `filename` 和部分 [参数](https://github.com/jshttp/content-disposition#options)。

### response.headerSent

检查是否已经发送了一个响应头。 用于查看客户端是否可能会收到错误通知。

### response.lastModified

将 `Last-Modified` 消息头返回为 `Date`, 如果存在。

### response.lastModified=

将 `Last-Modified` 消息头设置为适当的 UTC 字符串。您可以将其设置为 `Date` 或日期字符串。

```js
ctx.response.lastModified = new Date();
```

### response.etag=

设置包含 `"` 包裹的 ETag 响应， 请注意，没有相应的 `response.etag` getter。

```js
ctx.response.etag = crypto.createHash('md5').update(ctx.body).digest('hex');
```

### response.vary(field)

设置 `field` 的 `vary`。

### response.flushHeaders()

刷新任何设置的消息头，然后是主体(body)。

## 5.ctx别名直接访问Request或Response对象

- ## Request 别名

  以下访问器和 [Request](https://koa.bootcss.com/#request) 别名等效：

  - `ctx.header`
  - `ctx.headers`
  - `ctx.method`
  - `ctx.url`
  - `ctx.originalUrl`
  - `ctx.origin`
  - `ctx.href`
  - `ctx.path`
  - `ctx.query``
  - `ctx.querystring`
  - `ctx.host`
  - `ctx.hostname`
  - `ctx.fresh`
  - `ctx.stale`
  - `ctx.socket`
  - `ctx.protocol`
  - `ctx.secure`
  - `ctx.ip`
  - `ctx.ips`
  - `ctx.subdomains`
  - `ctx.is()`
  - `ctx.accepts()`
  - `ctx.acceptsEncodings()`
  - `ctx.acceptsCharsets()`
  - `ctx.acceptsLanguages()`
  - `ctx.get()`

  ## Response 别名

  以下访问器和 [Response](https://koa.bootcss.com/#response) 别名等效：

  - `ctx.body`
  - `ctx.status`
  - `ctx.message`
  - `ctx.length`
  - `ctx.type`
  - `ctx.headerSent`
  - `ctx.redirect()`
  - `ctx.attachment()`
  - `ctx.set()`
  - `ctx.append()`
  - `ctx.remove()`
  - `ctx.lastModified=`
  - `ctx.etag=`

## 6.错误处理

默认情况下，将所有错误输出到 stderr， 要执行自定义错误处理逻辑，如集中式日志记录，您可以添加一个 “error” 事件侦听器：

```javascript
app.on('error', err => {
  log.error('server error', err)
});
```

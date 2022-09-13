# node的模块化实践

### 模块化
我们采用类或者立即执行函数的方式来封装JS代码, 来避免命名冲突和提升代码的维护性
其实这里的一个类或者一个立即执行函数就是浏览器开发中一个模块

``` js
let obj = {
       模块中的业务逻辑代码
   };

(function(){
      模块中的业务逻辑代码
      window.xxx = xxx;
   })();
```

### NodeJS采用CommonJS规范实现了模块系统

- 在CommonJS规范中一个文件就是一个模块
- 在CommonJS规范中每个文件中的变量、函数都是私有的，对其他文件不可见的
- 在CommonJS规范中每个文件中的变量、函数必须通过exports暴露(导出)之后其它文件才可以使用
- 在CommonJS规范中想要使用其它文件暴露的变量、函数必须通过require()导入模块才可以使用

### nodejs中使用module.exports、exports和require这两个全局变量来实现模块化

- module.exports、exports可以将原来在文件内私有的变量和函数逐个暴露在外面。

- require可以把有暴露的文件的全部暴露变量和函数整合在一个对象后引入,这个暴露是文件级的暴露。
  
ps:
```
在NodeJS中想要导出模块中的变量函数有三种方式
1 通过exports.xxx = xxx导出
2 通过module.exports.xxx = xxx导出
3 通过global.xxx = xxx导出

注意点:
无论通过哪种方式导出, 使用时都需要先导入(require)才能使用
通过global.xxx方式导出不符合CommonJS规范, 不推荐使用
```


#### 暴露实例


``` js
let name = "it666.com";

function sum(a, b) {
    return a + b;
}

exports.str = name;
exports.fn = sum;
```

``` js
let aModule = require("./06-a");
console.log(aModule);
console.log(aModule.str);
let res = aModule.fn(10, 20);
console.log(res);
```

####　注意点１：exports和module.exports区别

exports不能直接赋值，module.exports可以

但在企业开发中无论哪种方式都不要直接赋值, 这个问题只会在面试中出现

``` js
let name = "lnj";

exports = name;
module.exports = name; 
```

``` js
let aModule = require("./a.js");

console.log(aModule);

/*
exports = name;
{}

module.exports = name;
lnj
*/
```

### 注意点２：require注意点
1. require导入模块时可以不添加导入模块的类型
require可以导入多种文件类型。如果没有指定导入模块的类型, 那么会依次查找.js .json .node文件。无论是三种类型中的哪一种, 导入之后都会转换成JS对象返回给我们。

1. 导入自定义模块时必须指定路径
require可以导入"自定义模块(文件模块)"、"系统模块(核心模块)"、"第三方模块"，导入"自定义模块"模块时前面必须加上路径，导入"系统模块"和"第三方模块"是不用添加路径。
因为如果是"系统模块"直接到环境变量配置的路径中查找，如果是"第三方模块"会按照module.paths数组中的路径依次查找。



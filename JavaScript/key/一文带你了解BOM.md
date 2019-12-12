
# 1. 一文带你了解BOM基本知识

## 1.1. BOＭ和ＤOM的区别

DOM就是一套操作HTML标签的API(接口/方法/属性)

BOM就是一套操作浏览器的API(接口/方法/属性)

## 1.2. BOM中常见的对象

- window: 代表整个浏览器窗口
注意: window是BOM中的一个对象, 并且是一个顶级的对象(全局),下面的对象都能通过它找到

- Navigator: 代表当前浏览器的信息, 通过Navigator我们就能判断用户当前是什么浏览器

- Location:  代表浏览器地址栏的信息, 通过Location我们就能设置或者获取当前地址信息

- History:   代表浏览器的历史信息, 通过History来实现刷新/上一步/下一步
注意点: 出于隐私考虑, 我们并不能拿到用户所有的历史记录, 只能拿本次使用时的历史记录

- Screen:   代表用户的屏幕信息


## 1.3. history

> history应该是属于最常用的BOM对象之一了，我把它写在最前面

>最重要的方法：**window.history.go(x);**

- x>0 前进x个当前标签页的历史记录
- x<0 后退x个当前标签页的历史记录
- x=0 刷新


```js
<body>
<h1>我是第一个界面</h1>
<button id="btn1">前进</button>
<button id="btn2">刷新</button>
<a href="52-JavaScript-History2.html">新的界面222</a>
<script
    // 注意点: 出于隐私考虑, 我们并不能拿到用户所有的历史记录, 只能拿到当前的历史记录
    let oBtn1 = document.querySelector("#btn1");
    let oBtn2 = document.querySelector("#btn2");
    // 前进
    /*
    注意点:
    只有当前访问过其它的界面, 才能通过go方法前进
    */
    oBtn1.onclick = function () {
        // window.history.forward();
        window.history.go(1);
    }
    // 刷新
    oBtn2.onclick = function () {
        window.history.go(0);
    }
</script>
</body>
```

```js
<body>
<h2>我是第2222个界面</h2>
<button id="btn1">后退</button>
<script>
    let oBtn1 = document.querySelector("#btn1");
    // 后退
    oBtn1.onclick = function () {
        // window.history.back();
        window.history.go(-1);
    }
</script>
</body>
```

## 1.4. navigator

Navigator: 代表当前浏览器的信息, 通过Navigator我们就能判断用户当前是什么浏览器
 
> 通过console.log(window.navigator)可以直接在控制台输入当前的浏览器信息，其中你会发现
> userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36"
> vendor: "Google Inc."这一个属性中描述了浏览器信息，我们可以用正则表达式的形式判断是哪一款浏览器


``` js
 var agent = window.navigator.userAgent;
    if(/chrome/i.test(agent)){
        alert("当前是谷歌浏览器");
    }else if(/firefox/i.test(agent)){
        alert("当前是火狐浏览器");
    }else if(/msie/i.test(agent)){
        alert("当前是低级IE浏览器");
    }else if("ActiveXObject" in window){
        alert("当前是高级IE浏览器");
    }s
```

### 1.4.1. 顺道给你补习一下这两个正则表达式的用法

- /chrome/i是一个正则表达式，表示不分大小写匹配句子中的chrome，正则表达式.test(str)是在利用js中正则对象的test方法，检测句子中是否包含这个要求的单词

- “ｓｔｒ” in 变量/obj　利用的是in语法，判断这个变量或者obj中是否有这个str

## 1.5. location

> 纸上看来终觉浅，绝知此事要躬行。

``` js
<body>
<button id="btn1">获取当前地址</button>
<button id="btn2">设置地址</button>
<button id="btn3">刷新</button>
<button id="btn4">强制刷新</button>
<script>
    // Location:  代表浏览器地址栏的信息, 通过Location我们就能设置或者获取当前地址信息
    let oBtn1 = document.querySelector("#btn1");
    let oBtn2 = document.querySelector("#btn2");
    let oBtn3 = document.querySelector("#btn3");
    let oBtn4 = document.querySelector("#btn4");
    // 获取当前地址栏的地址
    oBtn1.onclick = function(){
        console.log(window.location.href);
    }
    // 设置当前地址栏的地址
    oBtn2.onclick = function(){
        window.location.href = "http://www.it666.com";
    }
    // 重新加载界面
    oBtn3.onclick = function(){
        window.location.reload();
    }
    oBtn4.onclick = function(){
        window.location.reload(true);
    }
</script>
</body>
```
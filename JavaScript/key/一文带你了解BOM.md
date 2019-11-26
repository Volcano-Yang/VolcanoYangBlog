
# 一文带你了解BOM

## BOＭ和ＤOM的区别

DOM就是一套操作HTML标签的API(接口/方法/属性)

BOM就是一套操作浏览器的API(接口/方法/属性

## BOM中常见的对象

- window: 代表整个浏览器窗口
注意: window是BOM中的一个对象, 并且是一个顶级的对象(全局),下面的对象都能通过它找到

- Navigator: 代表当前浏览器的信息, 通过Navigator我们就能判断用户当前是什么浏览器
- 
- Location:  代表浏览器地址栏的信息, 通过Location我们就能设置或者获取当前地址信息
- 
- History:   代表浏览器的历史信息, 通过History来实现刷新/上一步/下一步
注意点: 出于隐私考虑, 我们并不能拿到用户所有的历史记录, 只能拿本次使用时的历史记录

- Screen:   代表用户的屏幕信息


## navigator

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

### 顺道给你补习一下这两个正则表达式的用法

- /chrome/i是一个正则表达式，表示不分大小写匹配句子中的chrome，正则表达式.test(str)是在利用js中正则对象的test方法，检测句子中是否包含这个要求的单词

- “ｓｔｒ” in 变量/obj　利用的是in语法，判断这个变量或者obj中是否有这个str


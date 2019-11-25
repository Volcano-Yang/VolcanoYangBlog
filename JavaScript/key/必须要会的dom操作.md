
# 1. 必须要会的DOM操作

**思维导图**
```
必须要会的DOM操作
|
|—— 获取指定的元素对象
|
|—— 编辑指定元素的内容
|—— 编辑指定元素的属性内容
|
|—— 设置DOM事件和定时器
```

## 1.1. 获取想要的元素

> DOM操作返回的是一个对象, 浏览器渲染之后html标签也是都会转化为对象

 ### 通过id获取指定元素
由于id不可以重复, 所以找到了就会将找到的标签包装成一个对象返回给我们, 找不到就返回Null

``` js
let oDiv = document.getElementById("box");
console.log(oDiv);
console.log(typeof oDiv);
```

### 1.1.1. 通过class名称获取
由于class可以重复, 所以找到了就返回一个存储了标签对象的数组, 找不到就返回一个空数组

``` js
let oDivs = document.getElementsByClassName("father");
console.log(oDivs);
```

### 1.1.2. 通过标签名称获取
由于标签名称可以重复, 所以找到了就返回一个存储了标签对象的数组, 找不到就返回一个空数组

``` js
let oDivs =  document.getElementsByTagName("div");
console.log(oDivs);
```

**下面的两种最常用**

### 1.1.3. 通过选择器获取指定的第一个元素
querySelector只会返回根据指定选择器找到的**第一个元素**

``` js
// let oDiv = document.querySelector("#box");
// let oDiv = document.querySelector(".father");
let oDiv = document.querySelector("div>form");
console.log(oDiv);
```


### 1.1.4. 通过选择器获取全部指定元素
querySelectorAll会返回指定选择器找到的所有元素

```
let oDivs = document.querySelectorAll(".father");
console.log(oDivs);
```

> div #app .buttom

## 1.2. 对获取到的元素内容进行编辑

### 1.2.1. 获取元素内容

1. innerHTML获取的内容包含标签, innerText/textContent获取的内容不包含标签
2. textContent获取的内容不会去除两端的空格, innerText获取的内容会去除两端的空格

``` html
<div>
    我是div
    <h1>我是标题</h1>
</div>
<script>
   let oDiv = document.querySelector("div");
   console.log(oDiv.innerHTML);
   console.log(oDiv.innerText);
   console.log(oDiv.textContent);

   let oDiv = document.querySelector("h1");
   console.log(oDiv.innerHTML);
   console.log(oDiv.innerText);
   console.log(oDiv.textContent);
</script>

<!-- 
    
输出1：

我是div
<h1>我是标题</h1>

我是div
我是标题

我是div

输出2：

我是标题

我是标题

我是标题

```

### 1.2.2. 设置元素内容

- 无论通过innerHTML/innerText/textContent设置内容, 新的内容会覆盖原有的内容。
- 如果通过innerHTML设置数据, 数据中包含标签, 会转换成标签之再添加
- 如果通过innerText/textContent设置数据, 数据中包含标签, 会转换成标签, 会当做一个字符串直接设置

``` html
    let oDiv = document.querySelector("div");
   // oDiv.innerHTML = "123";
   // oDiv.innerText = "456";
   // oDiv.textContent = "789";
   //  oDiv.innerHTML = "<span>我是span</span>";
   //  oDiv.innerText = "<span>我是span</span>";
   //  oDiv.textContent = "<span>我是span</span>";
```

## 1.3. 对获取的指定元素的属性操作


1. 如何获取元素属性 obj.getAttribute("attributeName")
- 通过对象.属性名称的方式无法获取到自定义属性的取值
- 通过getAttribute方法可以获取到自定义属性的取值

2. 如何修改元素属性 obj.setAttribute("attributeName")

3. 如何新增元素属性 obj.setAttribute("attributeName")
- setAttribute方法如果属性不存在就是新增, 如果属性存在就是修改

4. 如何删除元素属性 obj.removeAttribute("attributeName")

``` html
<img src="images/1.jpg" alt="我是alt222" title="我是title" nj="666">

<script>
    // 1.如何获取元素属性
    let oImg = document.querySelector("img");
    console.log(oImg.getAttribute("alt"));
    

    // 2.如何修改元素属性
    let oImg = document.querySelector("img");
    oImg.setAttribute("title", "新的title222");
    

    // 3.如何新增元素属性
    let oImg = document.querySelector("img");
    oImg.setAttribute("it666", "itzb");
    

    // 4.如何删除元素属性
    let oImg = document.querySelector("img");
    oImg.removeAttribute("alt");
</script>

```

## 1.4. 对元素的样式进行操作

### 1.4.1. 获取和设置行内样式

#### 1.4.1.1. 获取

console.log(oDiv.style.width);

// 注意点: 通过style属性只能过去到行内样式的属性值, 获取不到CSS设置的属性值

#### 1.4.1.2. 设置

通过JS添加的样式都是行内样式,这个会覆盖原来的样式

```js
oDiv.style.width = "300px";
oDiv.style.height = "300px";
oDiv.style.backgroundColor = "blue";
```

### 1.4.2. 获取和设置CSS类的样式


#### 1.4.2.1. 获取

let style = window.getComputedStyle(oDiv);

console.log(style.width);

 // getComputedStyle方法返回一个对象, 这个对象中就保存了CSS设置的样式和属性值

#### 1.4.2.2. 设置

oDiv.className = "box"; 添加已经写好的CSS样式

``` js
let oDiv = document.querySelector("div");
oDiv.className = "box";
```



``` html
<head>
    <meta charset="UTF-8">
    <title>07-JavaScript-操作元素样式</title>
    <style>
        .box{
            width: 200px;
            height: 200px;
            background-color: red;
        }
    </style>
</head>
<body>
<div class="box"></div>
<script>
    let oDiv = document.querySelector("div");
    oDiv.className = "box";


    oDiv.style.width = "300px";
    oDiv.style.height = "300px";
    oDiv.style.backgroundColor = "blue";
 
    console.log(oDiv.style.width);

    let style = window.getComputedStyle(oDiv);
    console.log(style.width);
</script>
</body>
```
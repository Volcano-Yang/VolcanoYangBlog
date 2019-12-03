
# VUE的过渡动画

> 注意： UI是用来设计样式的，过渡动画用来设计UI的出场和离场样式

```
思维导图

实现方式
|
|—— 载体：
|———— * vue的transiton标签
|———— * vue的transiton-group标签
|
|—— 操作方法：
|———— * 定义各阶段的CSS样式
|———— * 定义各阶段的js钩子函数

如何给Vue控制的元素添加过渡动画？

1 将需要执行动画的元素放到transition/transition-group组件中

2.1 当transition组件中的元素显示时会自动查找对应的各阶段CSS

2.2 当transition组件中的元素显示时会自动查找对应的js钩子函数

```

## 1.1 vue的transiton标签

``` js
<div id="app">
    <button @click="toggle">我是按钮</button>
    <transition appear name="one">
        <div class="box" v-show="isShow"></div>
    </transition>
    <transition appear name="two">
        <div class="box" v-show="isShow"></div>
    </transition>
</div>

```


## 1.2 vue的transiton-group标签

``` js
<div id="app">
        <transition-group appear tag="ul">
        <li v-for="(person,index) in persons">
            <input type="checkbox">
            <span>{{index}} --- {{person.name}}</span>
        </li>
        </transition-group>
</div>
```

## 1.3 注意点:

- transition用来给单个元素添加过渡动画，transition-group用来给多个元素添加过渡动画。transition中如果有多个元素只显示最初的那一个

- 如果想一进来就有动画, 要给transition/transition-group添加appear属性的方式，告诉Vue第一次进入就需要显示动画。

- transition-group中的 tag="ul" 后续渲染是会自动给transiton-group外添加ul标签，这个属性是为了让我们的代码看起来更优雅

- transition-group动画混乱问题,一般情况下都是因为v-for就地复用导致的,我们只需要保证所有数据key永远是唯一的即可。



## 2.1 定义各阶段的CSS动画样式

vue中给了[默认类名定义过渡动画样式](./较不常用的系统自带CSS过渡动画设置样式.md)和自定义类名定义过渡动画样式两种设置方法，第一种的复用效率不高，所以就最赘述了，自行了解，提高基础。

### 自定义类名定义过渡动画样式

``` js
<head>
    <meta charset="UTF-8">
    <title>32-Vue-过渡动画</title>
    <script src="js/vue.js"></script>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .box{
            width: 200px;
            height: 200px;
            background: red;
        }
        .a{
            opacity: 0;
        }
        .b{
            opacity: 1;
            margin-left: 500px;
        }
        .c{
            transition: all 3s;
        }
    </style>
</head>
<body>

<div id="app">
    <button @click="toggle">我是按钮</button>
    <transition appear enter-class="a" enter-active-class="c" enter-to-class="b">
        <div class="box" v-show="isShow"></div>
    </transition>
</div>
<script>
    let vue = new Vue({
        el: '#app',
        data: {
            isShow: true
        },
        methods: {
            toggle(){
                this.isShow = !this.isShow;
            }
        },
    });
</script>
</body>
```

### 样式设置规则

VUE定义了transition各个阶段的class，你只需要告诉他们每个class对应你css中的那一个样式即可

- enter-class  // 进入动画开始之前
- enter-active-class // 进入动画执行过程中
- enter-to-class // 进入动画执行完毕之后
- leave-class  // 离开动画开始之前
- leave-active-class // 离开动画执行过程中
- leave-to-class // 离开动画执行完毕之后

### 如何配合Animate.css使用
1. 导入Animate.css库
2. 在执行过程中的属性上绑定需要的类名

``` js
<head>
    <script src="js/vue.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .box{
            width: 200px;
            height: 200px;
            background: red;
        }
    </style>
</head>
<body>
<div id="app">
    <button @click="toggle">我是按钮</button>
    <transition appear 
    enter-active-class="animated bounceInDown" 
    leave-active-class="animated bounceOutUp" 
    >
        <div class="box" v-show="isShow"></div>
    </transition>
</div>

```

## 2.2 定义各阶段的钩子函数

```js
<div id="app">
    <button @click="toggle">我是按钮</button>
    <transition appear
                v-bind:css="false"
                v-on:before-enter="beforeEnterMethod"
                v-on:enter="enterMethod"
                v-on:after-enter="afterEnterMethod">
        <div class="box" v-show="isShow"></div>
    </transition>
</div>
<script>
    let vue = new Vue({
        el: '#app',
        data: {
            isShow: true
        },
        methods: {
            toggle(){
                this.isShow = !this.isShow;
            },
            beforeEnterMethod(el){
                console.log("beforeEnter");
                el.style.opacity = "0";
            },
            enterMethod(el, done){
                console.log("enter");
                el.offsetHeight;
                el.style.transition = "all 3s";
                setTimeout(function () {
                    done();
                }, 0);
            },
            afterEnterMethod(el){
                console.log("afterEnter");
                el.style.opacity = "1";
                el.style.marginLeft = "500px";
            }
        }
    });
</script>
```

### 钩子函数设置规则

本质是用js操作dom实现过渡动画，只需要把对应阶段的方法，绑定到对应的v-on:xxx=''中即可

- v-on:before-enter="beforeEnterMethod"  进入动画之前
- v-on:enter="enterMethod"  进入动画执行过程中
- v-on:after-enter="afterEnterMethod"  进入动画完成之后
- v-on:enter-cancelled="enterCancelledMethod"  进入动画被取消
  
  
- v-on:before-leave="beforeLeaveMethod" 离开动画之前
- v-on:leave="leaveMethod"  离开动画执行过程中
- v-on:after-leave="afterLeaveMethod" 离开动画完成之后
- v-on:leave-cancelled="leaveCancelledMethod" 离开动画被取消

### 注意点

1. 如果不想要transition去CSS中寻找动画，需要对transition设置v-bind:css='false'
2. 在动画过程中必须写上el.offsetWidth或者el.offsetHeight
3. 在enter和leave方法中必须调用done方法, 否则after-enter和after-leave不会执行
4. 需要需要添加初始动画, 那么需要把done方法包裹到setTimeout方法中调用

### 配合Velocity使用

1. 导入Velocity库
2. 在动画执行过程钩子函数中编写Velocity

``` js
<div id="app">
    <button @click="toggle">我是按钮</button>
    <transition appear
                v-on:enter="enter"
        <div class="box" v-show="isShow"></div>
    </transition>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
<script>
    let vue = new Vue({
        el: '#app',
        data: {
            isShow: true
        },
        methods: {
            toggle(){
                this.isShow = !this.isShow;
            },
            enter(el, done){
                Velocity(el, {opacity: 1, marginLeft: "500px"}, 3000);
                done();
            }
            
        },
    });
</script>
```

> 个人感觉第一种比较好用 嘻嘻
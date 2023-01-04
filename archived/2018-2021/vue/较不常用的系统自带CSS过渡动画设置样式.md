``` js
<head>
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
        .one-enter{
            opacity: 0;
        }
        .one-enter-to{
            opacity: 1;
            margin-left: 500px;
        }
        .one-enter-active{
            transition: all 3s;
        }
        .two-enter{
            opacity: 0;
        }
        .two-enter-to{
            opacity: 1;
            margin-top: 500px;
        }
        .two-enter-active{
            transition: all 3s;
        }
</style>
</head>

<body>
<div id="app">
    <button @click="toggle">我是按钮</button>
    <transition appear name="one">
        <div class="box" v-show="isShow"></div>
    </transition>
    <transition appear name="two">
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

当transition组件中的元素显示时会自动查找.x-enter/.x-enter-active/.x-enter-to类名;当transition组件中的元素隐藏时会自动查找.x-leave/ .x-leave-active/.x-leave-to类名

### 如何给全部的元素指定相同的动画
css样式指定v-阶段的类命名方式指定相同动画

### 如何给多个不同的元素指定不同的动画
如果有多个不同的元素需要执行不同的过渡动画,那么我们可以通过给transition指定name的方式,给css样式指定name-阶段的类命名方式指定
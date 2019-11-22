<!-- TOC -->

- [vue指令](#vue指令)
  - [v-on](#v-on)
  - [v-model](#v-model)
  - [v-bind](#v-bind)

<!-- /TOC -->

# vue指令

## v-on   

**v-on:事件='方法' 绑定事件 **

这个指令是专门用来绑定事件和方法的，方法写在vue实例中的methods中，再在组件中利用v-on绑定事件

> v-on:可以简写为@


## v-model   

**v-model='vue实例data中的数据名'  双向绑定value**

v-model指令经常和input标签一起使用，实现双向绑定。
绑定后，vue的data会覆盖掉input的value，input的value一更新马上会更新vue中的data

``` html
<body>
    <div id="app">
        <div>
                message:{{message}} 
        </div>
        <input type="text" value=''/>
        <input type="button" value="发送" @click='send'/>
    </div>
</body>
<script src="https://cdn.bootcss.com/vue/2.5.16/vue.js"></script>
<script>
    var app=new Vue({
        el:'#app',
        data:{
            message:'hello world!',
            value:''
        },
        methods: {
          send:function () {
              alert('发送成功！');
                app.$data.message=this.value;
                //绑在谁身上，谁就是this
                this.value='';
            }  
        },
    })
</script>
```

## v-bind 

**v-bind 绑定属性**

** v-bind:class='{样式名: 条件}' 动态绑定样式**

**思维导航**
<!-- TOC -->

- [Vue实例](#vue实例)
    - [vue实例的创建](#vue实例的创建)
    - [vue实例的属性](#vue实例的属性)
    - [vue实例的接口方法](#vue实例的接口方法)

<!-- /TOC -->

# 1. Vue实例

## 1.1. vue实例的创建

![create-vue](../assets/create-vue.png)


## 1.2. vue实例的属性

* **el：挂载元素**
* **data：储存数据对象**
* **methods：储存方法函数**
* props： 组件接收到的props对象
* refs：引向子组件
* is：添加一个字符串模板


## 1.3. vue实例的接口方法

> var vm=new Vue（）
> 这些属性都可以用vm.$属性名的方式访问到
> 其中data中的元素还可以省略$data 直接用vm.数据名方式访问到

> $watch接口可以查看一个变量的改变，这个函数有两个参数，一个是监督的变量，另一个是一个回调函数，回调函数有newval，oldval这两个参数。

``` html js
<body>
<div id="app">
	{{a}}
</div>

<script type="text/javascript">
var data = { a : 1 };
var vm = new Vue({
	el   : "#app",
	data : data
});

data.a='hi....data....';
vm.$data===data//输出true
//理解点1：上面的data是一个变量,下面的data是一个属性
// 将外部变量赋值给vm.$data，赋值后，vm.$data和外部data是绑定的，修改一方，另一方就会随之改变。

vm.data.a=2;
vm.$data.a=2;
// 理解点2：想要访问vm中的data需要使用vue的接口，vm.$data,直接使用vm.data是无效的

vm.$watch('a', function(newVal, oldVal){
	console.log(newVal, oldVal);
})
vm.$data.a = "test...."
//理解点3：注意要把这个函数放在变化之前
</script>

</body>
```






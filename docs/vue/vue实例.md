# 1. Vue简单实例创建



## 1.1. 创建vue的实例

(1) 创建vue对象

(2)　告诉vue对象它控制的区域

(3)　告诉vue对象被控制区域的数据是什么

``` html
<div id="app"> 
  {{ value }}
</div>

<script>
　　 new Vue({
        el: '#app',
        data: {     
                value: 'hello vue!'
        }
	})
</script>
```



## 1.2. vue实例的属性

### 1.2.1. el：挂载元素
### 1.2.2. data：储存数据对象

创建vue实例已经说过


### 1.2.3. methods：储存方法函数






## 1.3. vue实例的接口方法

 var vm=new Vue（）

 这些属性都可以用 vm.$属性名 的方式访问到

 其中data中的元素还可以省略$data 直接用 vm.数据名 方式访问到

> vm.$属性名  vm.数据名

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
//理解点1：一个data是变量,一个是属性
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






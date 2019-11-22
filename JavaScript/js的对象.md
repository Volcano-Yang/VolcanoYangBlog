## 创建对象的三种方式

### 使用默认类创建对象

``` js
        let obj = new Object();
        obj.name = "lnj";
        obj.age = 33;
        obj.say = function () {
            console.log("hello world");
        }
        console.log(obj.name);
        console.log(obj.age);
        obj.say();
```

### 使用默认类的简写方式创建对象
    
``` js
    
        let obj = {}; // let obj = new Object();
        obj.name = "lnj";
        obj.age = 33;
        obj.say = function () {
            console.log("hello world");
        }
        console.log(obj.name);
        console.log(obj.age);
        obj.say();
```

> 前两种方式都是先创建对象后设置属性     
 
### 同时创建对象和设置对象属性的方法

``` js

        let obj = {
            name: "lnj",
            age: 33,
            say: function () {
                console.log("hello world");
            }
        };
        console.log(obj.name);
        console.log(obj.age);
        obj.say();
        // 注意点: 属性名称和取值之间用冒号隔开, 属性和属性之间用逗号隔开
        // 对象中的：号相当于=号
```

## 函数和对象中的方法的区别

 1. 什么是函数?

函数就是没有和其它的类显示的绑定在一起的, 我们就称之为函数

2. 什么是方法?
方法就是显示的和其它的类绑定在一起的, 我们就称之为方法

        3.函数和方法的区别
        3.1函数可以直接调用, 但是方法不能直接调用, 只能通过对象来调用
        3.2函数内部的this输出的是window, 方法内部的this输出的是当前调用的那个对象

        4.无论是函数还是方法, 内部都有一个叫做this的东东
        this是什么? 谁调用了当前的函数或者方法, 那么当前的this就是谁
        */
        /*
        function demo() {
            // console.log("hello demo");
            console.log(this);
        }
        // demo();
        window.demo();
        */

        let obj = {
            name: "lnj",
            test: function () {
                // console.log("hello test");
                console.log(this);
            }
        }
        // test();
        obj.test();
        /* */
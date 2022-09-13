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


 /*
        1.什么是工厂函数?
        工厂函数就是专门用于创建对象的函数, 我们就称之为工厂函数
        */
        /*
        let obj = {
            name: "lnj",
            age: 33,
            say: function () {
                console.log("hello world");
            }
        };
        let obj = {
            name: "zs",
            age: 44,
            say: function () {
                console.log("hello world");
            }
        };
        */
        function createPerson(myName, myAge) {
            let obj = new Object();
            obj.name = myName;
            obj.age = myAge;
            obj.say = function () {
                console.log("hello world");
            }
            return obj;
        }
        let obj1 = createPerson("lnj", 34);
        let obj2 = createPerson("zs", 44);
        console.log(obj1);
        console.log(obj2);



        /*
        1.什么是构造函数
        构造函数和工厂函数一样, 都是专门用于创建对象的
        构造函数本质上是工厂函数的简写

        2.构造函数和工厂函数的区别
        2.1构造函数的函数名称首字母必须大写
        2.2构造函数只能够通过new来调用
        */
        function Person(myName, myAge) {
            // let obj = new Object();  // 系统自动添加的
            // let this = obj; // 系统自动添加的
            this.name = myName;
            this.age = myAge;
            this.say = function () {
                console.log("hello world");
            }
            // return this; // 系统自动添加的
        }
        /*
        1.当我们new Person("lnj", 34);系统做了什么事情
        1.1会在构造函数中自动创建一个对象
        1.2会自动将刚才创建的对象赋值给this
        1.3会在构造函数的最后自动添加return this;
        */
        let obj1 = new Person("lnj", 34);
        let obj2 = new Person("zs", 44);
        console.log(obj1);
        console.log(obj2);


****

性能优化
        function Person(myName, myAge) {
            // let obj = new Object();  // 系统自动添加的
            // let this = obj; // 系统自动添加的
            this.name = myName;
            this.age = myAge;
            // this.say = fns.mySay;
            // return this; // 系统自动添加的
        }
        Person.prototype = {
            say: function () {
                console.log("hello world");
            }
        }
        let obj1 = new Person("lnj", 34);
        obj1.say();
        let obj2 = new Person("zs", 44);
        obj2.say();
        console.log(obj1.say === obj2.say); // true
        // console.log(Person.prototype);


1.在JavaScript中属性和方法分类两类
        1.1实例属性/实例方法
        在企业开发中通过实例对象访问的属性, 我们就称之为实例属性
        在企业开发中通过实例对象调用的方法, 我们就称之为实例方法
        1.2静态属性/静态方法
        在企业开发中通过构造函数访问的属性, 我们就称之为静态属性
        在企业开发中通过构造函数调用的方法, 我们就称之为静态方法
        */
        function Person() {
            this.name = "lnj";
            this.say = function () {
                console.log("hello world");
            }
        }
        /*
        // 通过构造函数创建的对象, 我们称之为"实例对象"
        let obj = new Person();
        console.log(obj.name);
        obj.say();

        obj.age = 34;
        console.log(obj.age);
        obj.eat = function () {
            console.log("eat");
        }
        obj.eat();
        */

        // 构造函数也是一个"对象", 所以我们也可以给构造函数动态添加属性和方法
        Person.num = 666;
        Person.run = function () {
            console.log("run");
        }
        console.log(Person.num);
        Person.run();



从三角恋关系中学习看控制台中的对象

![sanjiaolian](/assets/sanjiaolian.png)
        /*
        1.每个"构造函数"中都有一个默认的属性, 叫做prototype
          prototype属性保存着一个对象, 这个对象我们称之为"原型对象"
        2.每个"原型对象"中都有一个默认的属性, 叫做constructor
          constructor指向当前原型对象对应的那个"构造函数"
        3.通过构造函数创建出来的对象我们称之为"实例对象"
          每个"实例对象"中都有一个默认的属性, 叫做__proto__
          __proto__指向创建它的那个构造函数的"原型对象"
        */
        function Person(myName, myAge) {
            this.name = myName;
            this.age = myAge;
        }
        let obj1 = new Person("lnj", 34);

        console.log(Person.prototype);
        console.log(Person.prototype.constructor);
        console.log(obj1.__proto__);


js对象的三大特效：封装性 继承性 多态性

4.为什么要封装?
        4.1不封装的缺点：当一个类把自己的成员变量暴露给外部的时候,那么该类就失去对属性的管理权，别人可以任意的修改你的属性
        4.2封装就是将数据隐藏起来,只能用此类的方法才可以读取或者设置数据,不可被外部任意修改. 封装是面向对象设计本质(将变化隔离)。这样降低了数据被误用的可能 (提高安全性和灵活性)
        */

        /*
        function demo() {
            var num = 123;
            let value = 456;
            function test() {
                console.log("test");
            }

            // console.log(num);
            // console.log(value);
            // test();
        }
        demo();
        console.log(num);
        console.log(value);
        test();
        */

         /*
        // 注意点:
        // 在给一个对象不存在的属性设置值的时候, 不会去原型对象中查找, 如果当前对象没有就会给当前对象新增一个不存在的属性
        // 由于私有属性的本质就是一个局部变量, 并不是真正的属性, 所以如果通过 对象.xxx的方式是找不到私有属性的, 所以会给当前对象新增一个不存在的属性
        */


 function Person() {
            this.name = null;
            this.age = 0;
            this.say = function () {
                console.log(this.name, this.age);
            }
        }
        let per = new Person();
        per.name = "lnj";
        per.age = 34;
        per.say();

        // 在企业开发中如果构造函数和构造函数之间的关系是is a关系, 那么就可以使用继承来优化代码, 来减少代码的冗余度
        // 学生 is a 人 , 学生是一个人
        function Student() {
            // this.name = null;
            // this.age = 0;
            // this.say = function () {
            //     console.log(this.name, this.age);
            // }
            this.score = 0;
            this.study = function () {
                console.log("day day up");
            }
        }
        Student.prototype = new Person();
        Student.prototype.constructor = Student;

        let stu = new Student();
        stu.name = "zs";
        stu.age = 18;
        stu.score = 99;
        stu.say();
        stu.study();


/*
        1.this是什么?
        从谁调用当前函数或者方法, this就是谁
        */

        /*
        2.这三个方法的作用是什么?
        这三个方法都是用于修改函数或者方法中的this的
        2.1.bind方法作用
        修改函数或者方法中的this为指定的对象, 并且会返回一个修改之后的新函数给我们
        注意点: bind方法除了可以修改this以外, 还可以传递参数, 只不过参数必须写在this对象的后面
        2.2.call方法作用
        修改函数或者方法中的this为指定的对象, 并且会立即调用修改之后的函数
        注意点: call方法除了可以修改this以外, 还可以传递参数, 只不过参数必须写在this对象的后面
        2.3.apply方法作用
        修改函数或者方法中的this为指定的对象, 并且会立即调用修改之后的函数
        注意点: apply方法除了可以修改this以外, 还可以传递参数, 只不过参数必须通过数组的方式传递
        */
        let obj = {
            name: "zs"
        }
        /*
        // function test(a, b) {
        //     console.log(a, b);
        //     console.log(this);
        // }
        // test(10, 20);
        // window.test();
        // let fn = test.bind(obj, 10, 20);
        // fn();

        // test.call(obj, 10, 20);

        // test.apply(obj, [10, 20]);
        */

        function Person() {
            this.name = "lnj";
            this.say = function () {
                console.log(this);
            }
        }
        let p = new Person();
        // p.say();
        // let fn = p.say.bind(obj);
        // fn();
        // p.say.call(obj);
        p.say.apply(obj);


<title>112-JavaScript-继承方式二</title>
    <script>
        function Person(myName, myAge) {
            // let per = new Object();
            // let this = per;
            // this = stu;
            this.name = myName; // stu.name = myName;
            this.age = myAge; // stu.age = myAge;
            this.say = function () { // stu.say = function () {}
                console.log(this.name, this.age);
            }
            // return this;
        }
        function Student(myName, myAge, myScore) {
            // let stu = new Object();
            // let this = stu;
            Person.call(this, myName, myAge); //  Person.call(stu);
            this.score = myScore;
            this.study = function () {
                console.log("day day up");
            }
            // return this;
        }
        let stu = new Student("ww", 19, 99);
        // stu.name = "zs";
        // stu.age = 18;
        // stu.score = 99;
        console.log(stu.score);
        stu.say();
        stu.study();
    </script>





最优解
![深度截图_选择区域_20191122205724](/assets/深度截图_选择区域_20191122205724.png)
     /*
        弊端:
        1.由于修改了Person原型对象的constructor属性, 所以破坏了Person的三角恋关系s
        2.由于Person和Student的原型对象是同一个, 所以给Student的元素添加方法, Person也会新增方法
         */
        // Student.prototype = Person.prototype;
        Student.prototype = new Person();
        Student.prototype.constructor = Student;
        Student.prototype.run = function(){
            console.log("run");
        }

        let per = new Person();
        per.run();

        /*
        1.js中继承的终极方法
        1.1在子类的构造函数中通过call借助父类的构造函数
        1.2将子类的原型对象修改为父类的实例对象
        */
        // let stu = new Student("ww", 19, 99);
        // console.log(stu.score);
        // stu.say();
        // stu.study();


        /*
        1.在ES6之前如果定义一个类?
        通过构造函数来定义一个类
        */
        /*
        function Person(myName, myAge) {
            // 实例属性
            // this.name = "lnj";
            // this.age = 34;
            this.name = myName;
            this.age = myAge;

            // 实例方法
            this.say = function () {
                console.log(this.name, this.age);
            }
            // 静态属性
            Person.num = 666;
            // 静态方法
            Person.run = function () {
                console.log("run");
            }
        }
        // let p = new Person();
        let p = new Person("zs", 18);
        p.say();
        console.log(Person.num);
        Person.run();
        */

        /*
        2.从ES6开始系统提供了一个名称叫做class的关键字, 这个关键字就是专门用于定义类的
        */
        /*
        class Person{
            // 当我们通过new创建对象的时候, 系统会自动调用constructor
            // constructor我们称之为构造函数
            constructor(myName, myAge){
                this.name = myName;
                this.age = myAge;
            }
            // 实例属性
            // name = "lnj";
            // age = 34;
            // 实例方法
            say(){
                console.log(this.name, this.age);
            }
            // 静态属性
            static num = 666;
            // 静态方法
            static run() {
                console.log("run");
            }
        }
        // let p = new Person();
        let p = new Person("zs", 18);
        p.say();
        console.log(Person.num);
        Person.run();
        */
---
title: TS入门笔记1——TS的类型声明
sidebar: 'auto'
categories:
 - 原创文章
tags:
 - typescript
publish: true
isShowComments: true
---

> 简单快速上手ts的学习路径：
>
> 一、熟悉掌握熟悉的强类型定义，初步学习编写强类型代码。
>
>1. 学习ts的声明变量类型，能够初步编写强类型代码；
>2. 学习ts的接口，进一步强定义对象的丰富属性；
>3. 学习ts的函数声明和实现定义，强类型化你的js函数；
>
> 二、灵活面对类型转换，类型报错，类型文件的声明和引入，灵活编写强类型代码。
>
>4. 学习ts的类型断言（解释型类型转换）；
>5. 学习ts的泛型，更灵活的面对多可能性类型参数；
>6. 学习ts的类型声明文件，全局定义；
> 
> ts在线运行练习网站：https://www.tslang.cn/play/index.html

## 一、ts简介

### 1.什么是TypeScript(TS)？ 

TypeScript 是 JavaScript 的一个超集，主要提供了类型系统和对 ES6 的支持，它由 Microsoft 开发。

TS和JS之间的关系其实就是Less/Sass和CSS之间的关系
就像Less/Sass是对CSS进行扩展一样, TS也是对JS进行扩展
就像Less/Sass最终会转换成CSS一样, 我们编写好的TS代码最终也会换成JS

### 2.为什么需要TypeScript?

因为JavaScript是弱类型, 很多错误只有在运行时才会被发现
而TypeScript是强类型, 它提供了一套静态检测机制,如何我们编码事中途变换变量的类型，ts就会在报错，帮助我们在编码时发现错误。

> Ts为帮助js弥补在大型项目中的缺陷而生。

### 3.TypeScript特点

- 支持代码静态检查，会在编译时对类型进行静态检查，如果发现有错误，编译的时候就会报错。但在运行时不会检查。
- 增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等。
- 支持诸如C，C++，Java，Go等后端语言中的特性。(枚举、泛型、类型转换、命名空间、声明文件、类、接口等)
- 支持最新的JavaScript新特特性。

示例：

编译前hello.ts：

```typescript
function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));
```

编译后：hello.js

```javascript
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'Tom';
console.log(sayHello(user));
```

上述例子中，我们用 `:` 指定 `person` 参数类型为 `string`。但是编译为 js 之后，并没有什么检查的代码被插入进来。

这是因为 **TypeScript 只会在编译时对类型进行静态检查，如果发现有错误，编译的时候就会报错**。而在运行时，与普通的 JavaScript 文件一样，不会对类型进行检查。



## 二、ts中的类型声明

TypeScript支持与JavaScript几乎相同的数据类型，此外还提供了实用的枚举类型、元祖方便我们使用

### 1.boolean、number、string简单类型的变量声明

#### 布尔类型 boolean

```typescript
let val2:boolean;
val2 = true;
// val2 = 1; // 会报错
console.log(val2);
```

#### 数值类型 number

```typescript
let val1:number; // 定义了一个名称叫做val1的变量, 这个变量中将来只能存储数值类型的数据
val1 = 123;
// val1 = "123"; // 会报错
// 注意点: 其它的用法和JS一样
// val1 = 0x11;
// val1 = 0o11;
// val1 = 0b11;
console.log(val1);
```

#### 字符串类型 string

```typescript
let val3:string;
val3 = "123";
val3 = `val1=${val1}, val2==${val2}`;
console.log(val3);
```

### 2.数组和元祖类型的变量声明

#### 数组类型

##### (1)整个数组数据类型一致的情况

###### 方式一: Array < number >

```typescript
// 需求: 要求定义一个数组, 这个数组中将来只能存储数值类型的数据
let arr1:Array<number>; // 表示定义了一个名称叫做arr1的数组, 这个数组中将来只能够存储数值类型的数据
arr1 = [1, 3, 5];
// arr1 = ['a', 3, 5]; // 报错
console.log(arr1);
```

###### 方式二: string[ ] （建议）
```typescript
// 需求: 要求定义一个数组, 这个数组中将来只能存储字符串类型的数据
let arr2:string[]; // 表示定义了一个名称叫做arr2的数组, 这个数组中将来只能够存储字符串类型的数据
arr2 = ['a', 'b', 'c'];
// arr2 = [1, 'b', 'c']; // 报错
console.log(arr2);
```

##### (2)整个数组数据类型不一致的情况

###### 联合类型声明数组 (number | string)[ ]

```typescript
let arr3:(number | string)[];
// 表示定义了一个名称叫做arr3的数组, 这个数组中将来既可以存储数值类型的数据, 也可以存储字符串类型的数据
arr3 = [1, 'b', 2, 'c'];
// arr3 = [1, 'b', 2, 'c', false]; // 报错
console.log(arr3);
```

##### (3) 自由任意类型元素的数组

###### any[ ]

```typescript
let arr4:any[]; // 表示定义了一个名称叫做arr4的数组, 这个数组中将来可以存储任意类型的数据
arr4 = [1, 'b', false];
console.log(arr4);
```

##### (4) 严格限制类型和长度的元祖数组

###### 元祖类型 [string, number, boolean]

> TS中的元祖类型其实就是数组类型的扩展,元祖用于保存定长定数据类型的数据

```typescript
let arr5:[string, number, boolean]; 

// 表示定义了一个名称叫做arr5的元祖, 这个元祖中将来可以存储3个元素, 第一个元素必须是字符串类型, 第二个元素必须是数字类型, 第三个元素必须是布尔类型

arr5 = ['a', 1, true];
// arr5 = ['a', 1, true, false]; // 超过指定的长度会报错
arr5 = ['a', 1, true];
console.log(arr5);
```

### 3.enum枚举类型

> 枚举用于表示固定的几个取值,例如: 一年只有四季、人的性别只能是男或者女。
> 枚举类型是TS为JS扩展的一种类型, 在原生的JS中是没有枚举类型的。

#### 定义：

```typescript

enum Gender{
    Male=0,
    Femal=1
}

// 简写
enum Gender{
    Male,
    Femal
}

// 定义了一个名称叫做Gender的枚举类型, 这个枚举类型的取值有两个, 分别是Male和Femal
```

#### 使用：

```typescript
let val:Gender; 
// 定义了一个名称叫做val的变量, 这个变量中只能保存Male或者Femal
val = Gender.Male;
val = Gender.Femal;
// val = 'nan'; // 报错
// val  = false;// 报错


// 注意点: TS中的枚举底层实现的本质其实就是数值类型, 所以赋值一个数值不会报错
// val = 666; // 不会报错
// console.log(Gender.Male); // 0
// console.log(Gender.Femal);// 1


// 注意点: TS中的枚举类型的取值, 默认是从上至下从0开始递增的
//         虽然默认是从0开始递增的, 但是我们也可以手动的指定枚举的取值的值
// 注意点: 如果手动指定了前面枚举值的取值, 那么后面枚举值的取值会根据前面的值来递增
// console.log(Gender.Male); // 6
// console.log(Gender.Femal);// 7

// 注意点: 如果手动指定了后面枚举值的取值, 那么前面枚举值的取值不会受到影响
// console.log(Gender.Male); // 0
// console.log(Gender.Femal);// 6

// 注意点: 我们还可以同时修改多个枚举值的取值, 如果同时修改了多个, 那么修改的是什么最后就是什么
// console.log(Gender.Male); // 8
// console.log(Gender.Femal);// 6

```

```typescript
// 我们可以通过枚举值拿到它对应的数据
console.log(Gender.Male); // 0
// 我们还可以通过它对应的数据拿到它的枚举值
console.log(Gender[0]); // Male
```

#### 探究底层实现原理

```typescript
var Gender;
(function (Gender) {
 // Gender[key] = value;
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Femal"] = 1] = "Femal";
})(Gender || (Gender = {}));

// Gender[Gender["Male"] = 0] = "Male" 相当于 Gender["Male"] = 0;Gender[0] = "Male";

let Gender = {};
Gender["Male"] = 0;
Gender[0] = "Male";
Gender["Femal"] = 1;
Gender[1] = "Femal";
```

### 4.any 任意类型

any表示任意类型, 当我们不清楚某个值的具体类型的时候我们就可以使用any，**任何数据类型的值都可以赋值给any类型**

一般用于定义一些通用性比较强的变量, 或者用于保存从其它框架中获取的不确定类型的值

> 注意不要过多使用any，因为什么都是any那ts就变成js了

```typescript
let value:any; // 定义了一个可以保存任意类型数据的变量
value = 123;
value = "abc";
value = true;
value = [1, 3, 5];
```

### 5.void类型
void与any正好相反, 表示没有任何类型, 一般用于函数返回值。**在TS中只有null和undefined可以赋值给void类型**

```typescript
function test():void {
    console.log("hello world");
}
test();

let value:void; // 定义了一个不可以保存任意类型数据的变量, 只能保存null和undefined
// value = 123; // 报错
// value = "abc";// 报错
// value = true;// 报错
// 注意点: null和undefined是所有类型的子类型, 所以我们可以将null和undefined赋值给任意类型
// value = null; // 不会报错
value = undefined;// 不会报错
```

### 6.never类型

表示的是那些永不存在的值的类型,**一般用于抛出异常或根本不可能有返回值的函数。**

```typescript
// function demo():never {
//     throw new Error('报错了');
// }
// demo();

// function demo2():never {
//     while (true){}
// }
// demo2();
```

### 7.Object对象类型

```typescript
let obj:object; // 定义了一个只能保存对象的变量
// obj = 1;
// obj = "123";
// obj = true;
obj = {name:'lnj', age:33};
console.log(obj);
```

> 如何表示一个具体的对象数据结构呢？
> 答案：可以使用ts的接口,在后续文章中会详细介绍。

### 8. 接口interface类型


#### （1）什么是接口类型?

> 和number,string,boolean,enum这些数据类型一样,接口也是一种类型, 也是用来约束使用者的。

#### （2）定义和使用

```typescript
// 需求: 要求定义一个函数输出一个人完整的姓名, 这个人的姓必须是字符串, 这个人的名也必须是一个字符

interface FullName{
    firstName:string
    lastName:string
}

let obj = {
    firstName:'Jonathan',
    lastName:'Lee'
    // lastName:18 会报错
};

//{firstName, lastName}使用了解构赋值
function say({firstName, lastName}:FullName):void {
    console.log(`我的姓名是:${firstName}_${lastName}`);
}
say(obj);

```


---
title: TS入门笔记3——TS中的函数声明
sidebar: 'auto'
categories:
 - 原创文章
tags:
 - typescript
publish: true
isShowComments: true
---

## 一、js中的三种定义函数的ts实现

>  TS中的函数大部分和JS相同,**不同之处在于ts会在函数的（参数）这中间和后面加上类型声明**

```javascript
// JavaScript定义函数的方法
// 命名函数

function say1(name) {

  console.log(name);

}

// 匿名函数

let say2 = function (name) {

  console.log(name);

}

// 箭头函数

let say3 = (name) => {

  console.log(name);

}
```

```typescript
// typescript定义函数的方法
// 命名函数

function say1(name:string):void {

  console.log(name);

}

// 匿名函数

let say2 = function (name:string):void {

  console.log(name);

}

// 箭头函数

let say3 = (name:string):void =>{

  console.log(name);

}

```



## 二、ts中函数声明和实现分离的写法



### （1）利用type声明函数

```typescript
// 先利用type声明一个函数
type AddFun = (a:number, b:number)=>number;
```

```typescript
// 再根据声明去实现这个函数
// 此时函数的参数和返回值可以不需要写类型声明了，因为ts可以通过这个函数声明推断出来类型了
let add:AddFun = function (x, y) {
    return x + y;
};
let res = add(30, 20);
console.log(res);
```



### （2）利用interface声明函数

```typescript
// 先利用interface声明一个函数
interface AddFun {
 	 (a:number, b:number):number   
}
```

```typescript
let add:AddFun = function (x, y) {
    return x + y;
};
let res = add(30, 20);
console.log(res);
```



## 三、js函数参数的三种用法的ts实现

### (1) 可选参数

```typescript
// 需求: 要求定义一个函数可以实现2个数或者3个数的加法

function add(x:number, y:number, z?:number):number {

  return x + y + (z ? z : 0);

}

let res = add(10, 20);

let res = add(10, 20, 30);
```

注意事项：

>可选参数可以是一个或多个

function add(x:number, y?:number, z?:number):number {

> 可选参数后面只能跟可选参数

function add(x:number, y?:number, z:number):number {  //报错



### (2)默认参数

```typescript
function add(x:number, y:number=10):number {

  return x + y;

}

let res = add(10);

let res = add(10, 30);
```



### (3)剩余参数

```typescript
function add(x:number, ...ags:number[]) {

  console.log(x);

  console.log(ags);

}

add(10, 20, 30, 40, 50)
```
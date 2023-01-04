---
title: TS入门笔记5——TS的泛型
sidebar: 'auto'
categories:
 - 原创文章
tags:
 - typescript
publish: true
isShowComments: true
---	

## 一、从场景出发理解泛型

需求: 定义一个创建数组的方法, 可以创建出指定长度的数组, 并且可以用任意指定的内容填充这个数组



### 方法一： 用any类型

```typescript
let getArray = (value:any, items:number = 5):any[]=>{

  return new Array(items).fill(value);

};

let arr1 = getArray("abc", 3);//['abc','abc','abc']

let arr2 = getArray(6, 3);//[3,3,3]

let res = arr1.map(item=>item.length); // 编辑时无提示item.length ['abc', 'abc', 'abc'] => [3, 3, 3]


```

>当前存储的问题:
>
>1.编写代码没有提示, 因为TS的静态检测不知道具体是什么类型
>
>2.哪怕代码写错了也不会报错, 因为TS的静态检测不知道具体是什么类型





### 方法二：用泛型< T >

失去了代码提示和编辑时报错，也就失去了ts的最大作用。为了解决这个问题，typescript就引入了泛型

```typescript
let getArray = <T>(value:T, items:number = 5):T[]=>{

  return new Array(items).fill(value);

};

let arr = getArray<string>('abc');

// let arr = getArray<number>(6);

// 注意点: 泛型具体的类型可以不指定

// 如果没有指定, 那么就会根据我们传递的泛型参数自动推导出来

let arr = getArray('abc');

// let arr = getArray(6);

let res = arr.map(item=>item.length);

console.log(res);


```

## 二、什么是泛型？

### （1）通过作用理解泛型

- 用来弥补any没有语法提示和报错的缺点。

- 最开始不指定类型，后面根据我们传入的类型确定类型。

### （2）使用方法

> 写法：function getArray<T>(value:T,length:number=5):T[]{
>
> ​            return new Array(items).fill(value);
>
> }
>
> 泛型是指定传入类型的，写在函数（）的前面；
>
> 返回结果类型是指定函数传出类型的，写在函数（）的后面；



> 用法：let arr = getArray<string>('abc');
>
> 在调用函数表达式的（）前面指明类型



## 三、泛型约束



默认情况下我们可以指定泛型为任意类型，但是有些情况下我们需要指定的类型满足某些条件后才能指定

那么这个时候我们就可以使用泛型约束。



```typescript
// 需求: 要求指定的泛型类型必须有Length属性才可以

interface LengthInterface{

  length:number

}

let getArray = <T extends LengthInterface>(value:T, items:number = 5):T[]=>{

  return new Array(items).fill(value);

};

let arr = getArray<string>('abc');

// let arr = getArray<number>(6);

let res = arr.map(item=>item.length);
```




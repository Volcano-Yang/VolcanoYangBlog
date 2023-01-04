---
title: Typescript的一些其他零碎知识
sidebar: 'auto'
categories:
 - 学习笔记
tags:
 - typescript
publish: true
isShowComments: true
---	

1.什么是字面量?

字面量就是源代码中一个固定的值

例如数值字面量: 1,2,3,...

例如字符串字面量: 'a','abc',...


2.在TS中我们可以把字面量作为具体的类型来使用

当使用字面量作为具体类型时, 该类型的取值就必须是该字面量的值

// type MyNum = 1;

// let value1:MyNum = 1;

// let value2:MyNum = 2;
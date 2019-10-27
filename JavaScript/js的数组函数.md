<!-- TOC -->

- [js的数组函数](#js的数组函数)
    - [pop() 从尾弹出](#pop-从尾弹出)
        - [作用](#作用)
        - [语法](#语法)
        - [返回值](#返回值)
        - [说明](#说明)
        - [实例](#实例)
    - [push() 从尾弹入](#push-从尾弹入)
        - [作用](#作用)
        - [语法](#语法)
        - [参数](#参数)
        - [返回值](#返回值)
        - [说明](#说明)
        - [实例](#实例)

<!-- /TOC -->

# 1. js的数组函数

## 1.1. pop() 从尾弹出

### 1.1.1. 作用
pop() 方法用于删除并返回数组的最后一个元素。

### 1.1.2. 语法
arrayObject.pop()

### 1.1.3. 返回值
arrayObject 的最后一个元素。

### 1.1.4. 说明
pop() 方法将删除 arrayObject 的最后一个元素，把数组长度减 1，并且返回它删除的元素的值。如果数组已经为空，则 pop() 不改变数组，并返回 undefined 值。

### 1.1.5. 实例
在本例中，我们将创建一个数组，然后删除数组的最后一个元素。请注意，这也会改变数组的长度：

``` js
<script type="text/javascript">

var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

document.write(arr)

document.write("<br />")

document.write(arr.pop())

document.write("<br />")

document.write(arr)

</script>
```

```
输出：

George,John,Thomas
Thomas
George,John

```

## 1.2. push() 从尾弹入

### 1.2.1. 作用
push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。

### 1.2.2. 语法
arrayObject.push(newelement1,newelement2,....,newelementX)

### 1.2.3. 参数
newelement1	必需。要添加到数组的第一个元素。
newelement2	可选。要添加到数组的第二个元素。
newelementX	可选。可添加多个元素。

### 1.2.4. 返回值
把指定的值添加到数组后的新长度。

### 1.2.5. 说明
- 要想数组的开头添加一个或多个元素，请使用 unshift() 方法。


### 1.2.6. 实例
``` js
<script type="text/javascript">

var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

document.write(arr + "<br />")
document.write(arr.push("James") + "<br />")
document.write(arr)

</script>
```

```
输出：

George,John,Thomas
4
George,John,Thomas,James
```


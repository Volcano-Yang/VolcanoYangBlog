<!-- TOC -->

- [1. js的数组函数](#1-js的数组函数)
  - [1.1. pop() 从尾弹出](#11-pop-从尾弹出)
    - [1.1.1. 作用](#111-作用)
    - [1.1.2. 语法](#112-语法)
    - [1.1.3. 返回值](#113-返回值)
    - [1.1.4. 说明](#114-说明)
    - [1.1.5. 实例](#115-实例)
  - [1.2. push() 从尾弹入](#12-push-从尾弹入)
    - [1.2.1. 作用](#121-作用)
    - [1.2.2. 语法](#122-语法)
    - [1.2.3. 参数](#123-参数)
    - [1.2.4. 返回值](#124-返回值)
    - [1.2.5. 说明](#125-说明)
    - [1.2.6. 实例](#126-实例)
  - [1.3. shift() 从头弹出](#13-shift-从头弹出)
    - [1.3.1. 作用](#131-作用)
    - [1.3.2. 语法](#132-语法)
    - [1.3.3. 返回值](#133-返回值)
    - [1.3.4. 说明](#134-说明)
    - [1.3.5. 实例](#135-实例)
  - [1.4. unshift() 从头弹入](#14-unshift-从头弹入)
    - [1.4.1. 用法](#141-用法)
    - [1.4.2. 语法](#142-语法)
    - [1.4.3. 参数](#143-参数)
    - [1.4.4. 返回值](#144-返回值)
    - [1.4.5. 实例](#145-实例)
  - [1.5. concat(arr1,arrx) 数组相连](#15-concatarr1arrx-数组相连)
    - [1.5.1. 作用](#151-作用)
    - [1.5.2. 语法](#152-语法)
    - [1.5.3. 参数](#153-参数)
    - [1.5.4. 返回值](#154-返回值)
    - [1.5.5. 实例](#155-实例)
  - [1.6. sort(sortbyfun)](#16-sortsortbyfun)
    - [1.6.1. 作用](#161-作用)
    - [1.6.2. 语法](#162-语法)
    - [1.6.3. 参数](#163-参数)
    - [1.6.4. 返回值](#164-返回值)
    - [1.6.5. 说明](#165-说明)
    - [1.6.6. 实例](#166-实例)
  - [1.7. toString() 将数组转换成string输出](#17-tostring-将数组转换成string输出)
    - [1.7.1. 作用](#171-作用)
    - [1.7.2. 语法](#172-语法)
    - [1.7.3. 返回值](#173-返回值)
    - [1.7.4. 提示和注释](#174-提示和注释)
    - [1.7.5. 实例](#175-实例)
  - [1.8. join(separator)](#18-joinseparator)
    - [1.8.1. 作用](#181-作用)
    - [1.8.2. 语法](#182-语法)
    - [1.8.3. 参数](#183-参数)
    - [1.8.4. 返回值](#184-返回值)
  - [1.9. reverse()](#19-reverse)
    - [1.9.1. 作用](#191-作用)
    - [1.9.2. 语法](#192-语法)
    - [1.9.3. 提示](#193-提示)
    - [1.9.4. 实例](#194-实例)

<!-- /TOC -->

| 函数         | 作用                        | 是否直接在原数组修改 |
|--------------|---------------------------|----------------------|
| pop()        | 从尾弹出                    | 是                   |
| push(x)      | 从尾弹入                    | 是                   |
| shift()      | 从头弹出                    | 是                   |
| unshift(x)   | 从头弹入                    | 是                   |
| concat(arr)  | 从尾添加数组                | 否                   |
| toString()   | 以,为间隔输出数组strng      |                      |
| join(septor) | 指定符号为间隔输出数组strng |                      |
| sort(sortby) | 按函数规则对数组排序        | 是                   |
| reverse()    | 把原来的数组反序储存        | 是                   |


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

## 1.3. shift() 从头弹出

### 1.3.1. 作用
shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。

### 1.3.2. 语法
arrayObject.shift()

### 1.3.3. 返回值
数组原来的第一个元素的值。

### 1.3.4. 说明
如果数组是空的，那么 shift() 方法将不进行任何操作，返回 undefined 值。请注意，该方法不创建新数组，而是直接修改原有的 arrayObject。

### 1.3.5. 实例
在本例中，我们将创建一个数组，并删除数组的第一个元素。请注意，这也将改变数组的长度：

``` js
<script type="text/javascript">

var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

document.write(arr + "<br />")
document.write(arr.shift() + "<br />")
document.write(arr)

</script>
```

```
输出：

George,John,Thomas
George
John,Thomas
```

## 1.4. unshift() 从头弹入

### 1.4.1. 用法
unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。

### 1.4.2. 语法
arrayObject.unshift(newelement1,newelement2,....,newelementX)

### 1.4.3. 参数	
newelement1	必需。向数组添加的第一个元素。
newelement2	可选。向数组添加的第二个元素。
newelementX	可选。可添加若干个元素。

### 1.4.4. 返回值
arrayObject 的新长度。

### 1.4.5. 实例
在本例中，我们将创建一个数组，并把一个元素添加到数组的开头，并返回数组的新长度：

``` js
<script type="text/javascript">

var arr = new Array()
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

document.write(arr + "<br />")
document.write(arr.unshift("William") + "<br />")
document.write(arr)

</script>
```

```
输出：

George,John,Thomas
4
William,George,John,Thomas
```


## 1.5. concat(arr1,arrx) 数组相连

### 1.5.1. 作用
concat(arrayX,arrayX,......,arrayX)方法用于连接两个或多个数组。

> 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。

### 1.5.2. 语法
arrayObject.concat(arrayX,arrayX,......,arrayX)

### 1.5.3. 参数
arrayX	必需。该参数可以是具体的值，也可以是数组对象。可以是任意多个。

### 1.5.4. 返回值
返回一个新的数组。该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。

### 1.5.5. 实例

在本例中，我们创建了两个数组，然后使用 concat() 把它们连接起来：

``` js
<script type="text/javascript">

var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

var arr2 = new Array(3)
arr2[0] = "James"
arr2[1] = "Adrew"
arr2[2] = "Martin"

var arr3 = new Array(2)
arr3[0] = "William"
arr3[1] = "Franklin"

document.write(arr.concat(arr2))
document.write(arr.concat(arr2,arr3))

</script>
```

```
输出：
George,John,Thomas,James,Adrew,Martin
George,John,Thomas,James,Adrew,Martin,William,Franklin
```

## 1.6. sort(sortbyfun)

### 1.6.1. 作用
sort(sortbyfun) 方法用于对数组的元素进行排序。

### 1.6.2. 语法
arrayObject.sort(sortbyfun)

### 1.6.3. 参数
sortby	可选。规定排序顺序。必须是函数。

### 1.6.4. 返回值
请注意，数组在原数组上进行排序，不生成副本。

### 1.6.5. 说明
如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进行排序。

### 1.6.6. 实例

```
例子 1
在本例中，我们将创建一个数组，并按字母顺序进行排序：

<script type="text/javascript">

var arr = new Array(6)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"
arr[3] = "James"
arr[4] = "Adrew"
arr[5] = "Martin"

document.write(arr + "<br />")
document.write(arr.sort())

</script>
输出：

George,John,Thomas,James,Adrew,Martin
Adrew,George,James,John,Martin,Thomas

例子 2
在本例中，我们将创建一个数组，并按字母顺序进行排序：

<script type="text/javascript">

var arr = new Array(6)
arr[0] = "10"
arr[1] = "5"
arr[2] = "40"
arr[3] = "25"
arr[4] = "1000"
arr[5] = "1"

document.write(arr + "<br />")
document.write(arr.sort())

</script>
输出：

10,5,40,25,1000,1
1,10,1000,25,40,5
请注意，上面的代码没有按照数值的大小对数字进行排序，要实现这一点，就必须使用一个排序函数：

<script type="text/javascript">

function sortNumber(a,b)
{
return a - b
}

var arr = new Array(6)
arr[0] = "10"
arr[1] = "5"
arr[2] = "40"
arr[3] = "25"
arr[4] = "1000"
arr[5] = "1"

document.write(arr + "<br />")
document.write(arr.sort(sortNumber))

</script>
输出：

10,5,40,25,1000,1
1,5,10,25,40,1000

```

## 1.7. toString() 将数组转换成string输出

### 1.7.1. 作用
toString() 方法可把数组转换为字符串，并返回结果。

### 1.7.2. 语法
arrayObject.toString()

### 1.7.3. 返回值
arrayObject 的字符串表示。返回值与没有参数的 join() 方法返回的字符串相同。


### 1.7.4. 提示和注释
注释：数组中的元素之间用逗号分隔。

### 1.7.5. 实例

``` js
<script type="text/javascript">

var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

document.write(arr.toString())

</script>
输出：

George,John,Thomas
```

## 1.8. join(separator)

### 1.8.1. 作用
join(separator) 方法用于把数组中的所有元素放入一个字符串，每个元素是通过指定的分隔符进行分隔的。

### 1.8.2. 语法
arrayObject.join(separator)

### 1.8.3. 参数
separator可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。

> toString()相当于默认版的join()

### 1.8.4. 返回值
返回一个字符串。该字符串是通过把 arrayObject 的每个元素转换为字符串，然后把这些字符串连接起来，在两个元素之间插入 separator 字符串而生成的。

``` js
实例
例子 1
在本例中，我们将创建一个数组，然后把它的所有元素放入一个字符串：

<script type="text/javascript">

var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

document.write(arr.join())

</script>
输出：

George,John,Thomas
例子 2
在本例中，我们将使用分隔符来分隔数组中的元素：

<script type="text/javascript">

var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

document.write(arr.join("."))

</script>
输出：

George.John.Thomas
```

## 1.9. reverse()

### 1.9.1. 作用
reverse() 方法用于颠倒数组中元素的顺序。

### 1.9.2. 语法
arrayObject.reverse()

### 1.9.3. 提示
注释：该方法会改变原来的数组，而不会创建新的数组。

### 1.9.4. 实例
在本例中，我们将创建一个数组，然后颠倒其元素的顺序：

``` js
<script type="text/javascript">

var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

document.write(arr + "<br />")
document.write(arr.reverse())

</script>
输出：

George,John,Thomas
Thomas,John,George

```
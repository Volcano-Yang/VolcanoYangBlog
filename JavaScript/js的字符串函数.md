<!-- TOC -->

- [js中的字符函数](#js中的字符函数)
    - [substring(start,[stop]) 截取字符串](#substringstartstop-截取字符串)
        - [作用](#作用)
        - [语法](#语法)
        - [参数 描述](#参数-描述)
        - [返回值](#返回值)
    - [substr(start [length ])  截取字符串](#substrstart-length---截取字符串)
        - [作用：](#作用)
        - [语法](#语法)
        - [参数 描述](#参数-描述)
    - [replace(regexp/substr,replacement) 替换字符](#replaceregexpsubstrreplacement-替换字符)
        - [作用](#作用)
        - [语法](#语法)
        - [参数](#参数)
        - [返回值](#返回值)
        - [demos](#demos)
    - [indexOf (Char, [startIndex], [length]) 寻找指定字符的下标](#indexof-char-startindex-length-寻找指定字符的下标)
        - [语法](#语法)
        - [参数](#参数)
        - [返回值](#返回值)
    - [split(separator,howmany) 把字符串分割成数组](#splitseparatorhowmany-把字符串分割成数组)
        - [语法](#语法)
        - [参数](#参数)
        - [返回值](#返回值)
    - [toUpperCase()|toLowerCase() 字符串转换](#touppercasetolowercase-字符串转换)
    - [字符串连接](#字符串连接)

<!-- /TOC -->

# js中的字符函数


## substring(start,[stop]) 截取字符串 

### 作用
用于提取字符串中介于两个指定下标之间的字符。 

### 语法 
stringObject.substring(start,[stop]) 

### 参数 描述 
start 必需。一个非负的整数，规定要提取的子串的第一个字符在 stringObject 中的位置。 
stop 可选。一个非负的整数，比要提取的子串的最后一个字符在 stringObject 中的位置多 1。如果省略该参数，那么返回的子串会一直到字符串的结尾。 

### 返回值 
一个新的字符串，该字符串值包含 stringObject 的一个子字符串，其内容是从 start 处到 stop-1 处的所有字符，其长度为 stop 减 start。 



## substr(start [length ])  截取字符串

### 作用：
用于返回一个从指定位置开始的指定长度的子字符串。 

### 语法 
stringObject.substr(start [length ]) 

### 参数 描述 
start 必需。所需的子字符串的起始位置。字符串中的第一个字符的索引为 0。 
length 可选。在返回的子字符串中应包括的字符个数。 
如果没有指定该参数，则子字符串将延续到stringObject的最后。 

```
举例： 
代码如下:

var str = "0123456789"; 

alert(str.substring(0));------------"0123456789" 

alert(str.substring(5));------------"56789" 

alert(str.substring(10));-----------"" 

alert(str.substring(-5));-----------"0123456789" 

alert(str.substring(0,5));----------"01234" 

alert(str.substring(0,12));---------"0123456789" 

alert(str.substr(0));---------------"0123456789" 

alert(str.substr(5));---------------"56789" 

alert(str.substr(10));--------------"" 

alert(str.substr(-5));--------------"0123456789" 

alert(str.substr(0,5));-------------"01234" 

alert(str.substr(0,12));------------"0123456789" 
```
---
## replace(regexp/substr,replacement) 替换字符

### 作用
> replace()最js中比较简单的字符替换函数，但是它也是可以跟正则和函数结合实现强大的字符替换效果。

### 语法
stringObject.replace(regexp/substr,replacement)

### 参数
regexp/substr	
必需。规定子字符串或要替换的模式的 RegExp 对象。

请注意，如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换为 RegExp 对象。

replacement	必需。一个字符串值。规定了替换文本或生成替换文本的函数。

### 返回值
一个新的字符串，是用 replacement 替换了 regexp 的第一次匹配或所有匹配之后得到的。

### demos
``` js
<script language="javascript">
        var strM1 = "javascript is a good script language";
        alert(strM1.replace("a", "A"));
        //输出jAvascript is a good script language

        var strM2 = "javascript is a good script language";
        alert(strM2.replace(/a/, "A"));
        //输出jAvascript is a good script language

        var strM3 = "javascript is a good script language";
        alert(strM3.replace(/a/g, "A"));
        //输出jAvAscript is A good script lAnguAge

        //将句首字母换成大写
        var strM4 = "javascript is a good script language";
        function change(word) {
            return word[0].toUpperCase()+word.substring(1);
        }
        alert(strM4.replace(/\b\w+\b/, change));
        //输出Javascript is a good script language

        //将所有单词首字母换成大写
        var strM5 = "javascript is a good script language";
        function change(word) {
            return word[0].toUpperCase()+word.substring(1);
        }
        alert(strM5.replace(/\b\w+\b/g, change));
        //输出Javascript Is A Good Script Language
    </script>
```

## indexOf (Char, [startIndex], [length]) 寻找指定字符的下标

### 语法
String.IndexOf (Char, [startIndex], [length])

报告指定字符在此实例中的第一个匹配项的索引。搜索从指定字符位置开始，并检查指定数量的字符位置。

### 参数
 
char

要查找的 Unicode 字符。 对 value 的搜索区分大小写。

startIndex
 
可选项，搜索起始位置。不设置则从0开始。

length
 
可选项，要检查的字符位置数。

### 返回值
 
如果找到该字符，则为 value 的索引位置；否则如果未找到，则为 -1。

IndexOf()
 
查找字串中指定字符或字串首次出现的位置,返首索引值，如：

str1.IndexOf("字")； //查找“字”在str1中的索引值（位置）

str1.IndexOf("字串")；//查找“字串”的第一个字符在str1中的索引值（位置）


```
string test="asdfjsdfjgkfasdsfsgfhgjgfjgdddd";

test.indexof('d') =2 //从前向后 定位 d 第一次出现的位置

test.indexof('d',1) =2 //从前向后 定位 d 从第三个字符串第一次出现的位置

test.indexof('d',5,2) =6 //从前向后 定位 d 从第5 位开始查，查2位，即 从第5位到第7位；
```

> 注意：用字符找下标使用indexof，用下标找字符只需使用[i].
---

##  split(separator,howmany) 把字符串分割成数组

### 语法
stringObject.split(separator,[howmany])

### 参数
separator 必需。字符串或正则表达式，从该参数指定的地方分割 stringObject。
howmany	可选。该参数可指定返回的数组的最大长度。
如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。

### 返回值
一个字符串数组。

一个简单js字符串反转
``` js
var a = 'abcdef'
console.log(a.split(''))  //["a", "b", "c", "d", "e", "f"]
//split()  将字符串分割成数组  参数来指定以哪种为界限来分割
console.log(a.split('').reverse())  // ["f", "e", "d", "c", "b", "a"]
//reverse()  // 改变数组 将数组中的元素倒序排列
console.log(a.split('').reverse().join(''))  //fedcba
// join() 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。
```

## toUpperCase()|toLowerCase() 字符串转换

- toLowerCase()	把字符串转换为小写

- toUpperCase()	把字符串转换为大写


## 字符串连接

- 直接用+运算符
- 装逼concat() concat一般用在数组会比较方便
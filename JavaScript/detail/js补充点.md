#### 拓展运算符 ...

1. 拓展运算符在等号的左边，作用是将剩余的数据打包到一个新的数组中。
> 注意只能写在最后

2. 拓展运算符在等号的右边，作用是将数组中的数据拆解开
``` html

let [a,...b]=[1,2,3,4,5]

// a=1,b=[2,3,4,5]

let arr1=[1,2,3]

let arr2=[4,5,6]

let arr=[...arr1,...arr2]

// let arr=[1,2,3,4,5,6]
```

3.拓展运算符可以运用于函数的形参当中，作用是把实参都打包成一个数组

``` js
function getSum(...arr)
{
    let sum=0
    for(i=0;i<arr.length();i++)
    sum+=arr[i]
    console.log(sum)
}

getSum(1,2,3,4)
//从此不再害怕数据的数量
```

### ===

=== 值相同且在内存中的位置也要相同


### 弹框

```
alert();

prompt();

```


### 顺道给你补习一下这两个正则表达式的用法


``` js
 var agent = window.navigator.userAgent;
    if(/chrome/i.test(agent)){
        alert("当前是谷歌浏览器");
    }else if(/firefox/i.test(agent)){
        alert("当前是火狐浏览器");
    }else if(/msie/i.test(agent)){
        alert("当前是低级IE浏览器");
    }else if("ActiveXObject" in window){
        alert("当前是高级IE浏览器");
    }s
```


- /chrome/i是一个正则表达式，表示不分大小写匹配句子中的chrome，正则表达式.test(str)是在利用js中正则对象的test方法，检测句子中是否包含这个要求的单词

- “ｓｔｒ” in 变量/obj　利用的是in语法，判断这个变量或者obj中是否有这个str
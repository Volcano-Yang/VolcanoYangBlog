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


### 一个我不知道的语句

if("textContent" in obj)

### 弹框

```
alert();

prompt();

```
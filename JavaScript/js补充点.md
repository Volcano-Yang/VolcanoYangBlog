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


#### 如何设置函数形参的默认值

形参默认值就是当设置了形参但是没有实参时就可以直接使用这个值

在ES6之前可以通过逻辑运算符来指定形参的默认值
格式：条件A||条件B

``` js
function print(a,b)
{
    a=a||"a是undefined就是输出我";
    b=b||"b是undefined就是输出我";

    console.log(a,b);
}

print();
// 输出："a是undefined就是输出我"，"b是undefined就是输出我"

print(123,'abc');

//输出：123,'abc'
```

在ES6之后通过直接在形参中设置等号设置默认值

``` js
function print(a='a是undefined就是输出我',b='b是undefined就是输出我')
{
    console.log(a,b);
}

print();
// 输出："a是undefined就是输出我"，"b是undefined就是输出我"

print(123,'abc');

//输出：123,'abc'
```


=== 值相同且在内存中的位置也要相同



if("textContent" in obj)


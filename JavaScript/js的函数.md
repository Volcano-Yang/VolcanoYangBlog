
``` html
functon name (val1,val2)
{
    let val3=val1+val2

    //return val3
}
```

> 函数是专门用来封装代码的。
> 不使用函数的话代码会过于冗杂，同时需求变更时要修改的地方会很多。

> 命名函数最好用驼峰命名 toLeft 小写单词 首字母大写单词...

> js中函数参数可以不需要指定类型 也不需要确定函数的返回值在函数名前加类型名

> 函数如果没有通过return返回值，默认会返回undefined

> **还可以直接把一个函数保存在变量中，将来可以直接用'变量名称（）;'的访问**

``` html
let say= function (){
    console.log("hello world");
}

say();
//输出hello world
```



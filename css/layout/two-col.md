# 双列布局

> 左边一列固定，右边一列自动填满


# 浮动解法

## float&margin-left

> left：float：left 和固定宽度 width：300px
> right：margin-left：300px

### 优缺点
- 旧浏览器一个浮动一个固定会有问题
- margin决定于width，没有解耦
- right中内容不能使用clear消除浮动，否则会打乱布局

``` html
	<style>
        #left,
        #right {
            height: 300px;
        }

        #left {
            border: green solid 1px;
            color: green;
            width: 300px;
            float: left;
        }

        #right {
            border: hotpink solid 1px;
            color: hotpink;
            margin-left: 300px;
        }
	</style>
	
	<body>
        <div id="left">固定列：左边</div>
        <div id="right">自适应列：右边</div>
	</body>

```

## float&hidden

> left：float：left 和固定宽度 width：300px
> right：overflow：hidden

### 优缺点
- 兼容性问题，使用overflow后就没有了
- 解耦完全
- 

``` html
	<style>
        #left,
        #right {
            height: 300px;
        }

        #left {
            border: green solid 1px;
            color: green;
            width: 300px;
            float: left;
        }

        #right {
            border: hotpink solid 1px;
            color: hotpink;
            overflow: hidden;
        }
	</style>
	
	<body>
        <div id="left">固定列：左边</div>
        <div id="right">自适应列：右边</div>
	</body>
```

# display：table解法

## table&table-cell

> 利用table表格标签没有设置宽度的列会自动填满剩余宽度的特性
> parent：width：100%  display：table
> left：display：table-cell 和 固定列宽
> right：display：table-cell

### 优缺点
一个字好用，除去flex布局 这个就是最好用的了

 ``` html
    <style>
        #parent{
            display: table;
            width: 100%;
            table-layout: fixed;
        }

        #left,
        #right {
            display: table-cell;
            height: 300px;
        }

        #left {
            border: green solid 1px;
            color: green;
            width: 300px;
        }

        #right {
            border: hotpink solid 1px;
            color: hotpink;
        }
    </style>

	<body>
    <div id="parent">
        <div id="left">固定列：左边</div>
        <div id="right">自适应列：右边</div>
    </div>
	</body>
 ```

 # flex大法

 > parent: 设置flex、主轴方向、元素沿主轴排列方式
 > left:设置固定宽度
 > right:设置100%宽度 自动填满剩余

### 优缺点：
flex大法真香

 ``` html
 <style>
        #parent {
            display: flex;
            flex-direction: row;
            justify-content: start;
            width: 100%;
        }

        #left,
        #right {
            height: 300px;
        }

        #left {
            border: green solid 1px;
            color: green;
            width: 300px;
        }

        #right {
            width: 100%;
            border: hotpink solid 1px;
            color: hotpink;
        }
	</style>
	
	<body>
    <div id="parent">
        <div id="left">固定列：左边</div>
        <div id="right">自适应列：右边</div>
    </div>
</body>
 ```
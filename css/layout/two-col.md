# 双列布局

> 左边一列固定，右边一列自动填满

## float&margin-left

> 不需要parent 
> 对left设置float：left 和固定宽度 width：300px
> 对right设置margin-left：300px

### 优缺点
- 旧浏览器一个浮动一个固定会有问题
- margin决定于width，没有解耦
- right中内容不能使用clear消除浮动，否则会打乱布局

``` html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>两列布局</title>
		<style type="text/css">
			#left{
				width: 300px;
				background: #C9394A;
				float: left;
			}
			#right{
				background: #CCCCCC;
				margin-left: 300px;
			}
			#left,#right{
				height: 600px;
			}
			/* div 默认是100%的宽度 */
			#inner{
				height: 300px;
				background: green;
				
			}
		</style>
	</head>
	<body>
			<div id="left">
				left
			</div>
			<div id="right">
				right
				<div id="inner">
					啊啊啊啊
				</div>
			</div>
	</body>
</html>

```

## float&hidden

> 不需要parent 
> 对left设置float：left 和固定宽度 width：300px
> 对right设置overflow：hidden

### 优缺点
- 兼容性问题，使用overflow后就没有了
- 解耦完全

``` html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>两列布局</title>
		<style type="text/css">
			#left{
				width: 300px;
				background: #C9394A;
				float: left;
			}
			#right{
				background: #CCCCCC;
				overflow: hidden;
			}
			#left,#right{
				height: 600px;
			}
			
			
		</style>
	</head>
	<body>
			
			<div id="left">
				left
			</div>
			<div id="right">
				right
			</div>
			
	</body>
</html>
```

## table&table-cell

> 利用table表格标签没有设置宽度的列会自动填满剩余宽度的特性
> 需要parent，对parent设置width：100%  display：table
> 对left设置 display：table-cell 和 固定列宽
> 对right设置 display：table-cell

### 优缺点
 似乎找不出什么缺点

 ``` html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			#parent,#left,#right{
				height: 600px;
			}
			#parent{
				display: table;
				width: 100%;
				border: #C9394A 1px solid;
			}
			#left{
				width: 300px;
				background: #C9394A;
				display: table-cell;
			}
			
			#right{
				background: #008000;
				display: table-cell;
			}
			
			
		</style>
	</head>
		
		
	<body>
		<div id="parent">
			<div id="left">
				left
			</div>
			<div id="right">
				right
			</div>
		</div>
	</body>
</html>

 ```
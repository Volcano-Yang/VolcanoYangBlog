
<!-- TOC -->

- [水平居中布局](#水平居中布局)
	- [text-align&amp;inline-block](#text-alignampinline-block)
		- [优缺点：](#优缺点)
		- [三种display属性](#三种display属性)
	- [table|block&amp;margin](#tableblockampmargin)
		- [优缺点](#优缺点)
		- [margin补课](#margin补课)
	- [absolute&amp;left&amp;transform](#absoluteampleftamptransform)
		- [优缺点](#优缺点-1)
		- [position补课：](#position补课)
		- [transfrom补课：](#transfrom补课)
- [垂直居中布局](#垂直居中布局)
	- [table-cell&amp;vertical-align](#table-cellampvertical-align)
		- [优缺点](#优缺点-2)
		- [display再补课](#display再补课)
		- [vertical-align补课](#vertical-align补课)
		- [height:100%补课](#height100补课)
	- [absolute&amp;top&amp;transfrom](#absoluteamptopamptransfrom)
		- [优缺点](#优缺点-3)
- [水平垂直居中布局](#水平垂直居中布局)
	- [vertical-align&amp;text-align](#vertical-alignamptext-align)
		- [优缺点：](#优缺点-1)
	- [absolute&amp;transfrom](#absoluteamptransfrom)
		- [优缺点](#优缺点-4)

<!-- /TOC -->

# 水平居中布局

## text-align&inline-block

> 在parent中设置text-align：center
> 在child中设置display：inlne-block

### 优缺点：
兼容性好，因为这两个属性都是css2中的内容，就是text-align具有继承性，有时会污染子元素css

### 三种display属性

- block 块级元素
  - 父级元素的text-align属性对行内元素无效

- inline 行内元素   
  - 父级元素的text-align属性对行内元素有效
  - 该元素的width和height会变得无效，变成根据该元素的内容自动调整大小，如果没有内容就看不到这个元素

- inline-block 行内块级元素
  - 拥有行内和块级元素的双重特点
  - 父级元素的text-align属性对行内元素有效和该元素的width和height会变得有效



``` html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>水平居中</title>
		<style type="text/css">
			#parent{
				width: 100%;
				height: 200px;
				background: #ccc;
				text-align: center;
			}
			
			#child{
				width: 200px;
				height: 200px;
				background: #c9394a;
				display: inline-block;
			}
		</style>
	</head>
	<body>
		<div id="parent">
			<div id="child">
				水平居中
			</div>
		</div>
	</body>
</html>

text-align具有继承性，parent中child的内容也会水平居中，如果想要让child中的内容左对齐，可以对child添加text-align：left，覆盖属性。
```

## table|block&margin

> 在child中设置display：table或block  margin：0 auto
 - table是css的内容，相对设置block较兼容
 - div等block元素可以不用重复设置

### 优缺点

- 只需要对child元素设置样式就可以实现效果
- 如果child脱离文档流的话，会导致margin属性无效（child设置position: absolute|fixed;）

### margin补课

margin属性代表外边距：
- 一个值: 上下左右四个的边距
- 两个值: 第一个表示上下边距  第二个表示左右边距
  - 0 auto 表示上下边距为0 左右边距根据浏览器自动分配
- 三个值：第一个表示上，第二个表示左右，第三个表示下
- 四个值：上右下左 


``` html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>水平居中</title>
		<style type="text/css">
		#parent{
				width: 100%;
				height: 200px;
				background: #ccc;
			}
			
			#child{
				width: 200px;
				height: 200px;
				background: #c9394a;
				display: block;
				margin:0 auto;
			}
		</style>
	</head>
	<body>
		<div id="parent">
			<div id="child">
				水平居中
			</div>
		</div>
	</body>
</html>

```

## absolute&left&transform

> parent和child都加上position:absolute
> child设置left:50%
> child再向左平移自己宽度的一半 transfrom:translatex(-50%)

### 优缺点

parent脱离文档流，不影响子级元素的水平居中效果；但是transfrom属于css3中的属性，老浏览器不支持。

### position补课：

- static：默认不开启
- absolute：绝对定位
  - 如果父级元素没有开启定位，这个绝对定位是以浏览器页面为定位的
  - 如果父级元素开启定位，这个绝对定位是相对父级元素为定位的
- fixed：相对定位
- relative：相对定位

### transfrom补课：
transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜

``` html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>水平居中</title>
		<style type="text/css">
			#parent{
				width: 100%;
				height: 200px;
				background: #ccc;
				position: absolute;
			}
			
			#child{
				width: 200px;
				height: 200px;
				background: #c9394a;
				position: absolute;
				left: 50%;
				transform: translateX(-50%)
			}
			
		</style>
	</head>
	<body>
		<div id="parent">
			<div id="child">
				水平居中
			</div>
		</div>
	</body>
</html>
```

# 垂直居中布局

## table-cell&vertical-align

> parent设置display：table-cell 和 vertical-align：middle

### 优缺点

兼用性好，vertical-align会污染子元素样式

### display再补课

- table：设置当前元素为table元素（表格）
- table-cell：设置当前元素为td元素（单元格）
  - 注意设置了table-cell后，如果父元素没有确切的宽度，width:100%会失效

### vertical-align补课
- top middle bottom
- 用于单元格等元素的设置内容垂直方向的对齐方式

> 这种方法就相当于把parent设置成一个单元格，来设置垂直居中

``` html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>垂直居中布局</title>
		<style type="text/css">
			#parent {
				width: 200px;
				height: 600px;
				background: #ccc;
				display: table-cell;
				vertical-align: middle;
			}

			#child {
				width: 200px;
				height: 200px;
				background: #c9394a;
			}
		</style>
	</head>
	<body>
		<div id="parent">
			<div id="child">
				水平居中
			</div>
		</div>
	</body>
</html>
```

### height:100%补课
如果你要是设置宽度为width: 100%;，那这个元素的宽度会立刻扩展到窗口的整个横向宽度，
但是如果你设置高度为height：100%，那么这元素的高度不会立即扩展到整个窗口的高度，
原因是浏览器不会计算页面高度。

**当你设置height：100%，如果父级元素是body是无效的，如果父级元素是其他元素，该元素会撑满整个父元素的高度。**


## absolute&top&transfrom

> parent和child都设置absolute
> child设置top:50 transfrom:translateY(-50%)


### 优缺点

parent是否脱离文档流，不影响子级元素的水平居中效果；但是transfrom属于css3中的属性，老浏览器不支持。


``` html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>垂直居中布局</title>
		<style type="text/css">
			#parent {
				width: 200px;
				height: 600px;
				background: #ccc;
				position: absolute;
			}
			
			#child {
				width: 200px;
				height: 200px;
				background: #c9394a;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
			}
		</style>
	</head>
	<body>
		<div id="parent">
			<div id="child">
				水平居中
			</div>
		</div>
	</body>
</html>
```

# 水平垂直居中布局

## vertical-align&text-align

> 对parent设置:display:table-cell , vertical-align：middle , text-align:center
> 对child设置：display：inline-block

### 优缺点：
兼容性好，但是设置了table-cell后，width：100%会失效

``` html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>水平垂直居中</title>
		<style type="text/css">
			#parent{
				width: 1000px;
				height: 600px;
				background-color: #CCCCCC;
				text-align: center;
				display: table-cell;
				vertical-align: middle;
			}
			#child{
				width: 200px;
				height: 200px;
				background-color: #C9394A;
				display: inline-block;
			}
		</style>
	</head>
	<body>
			<div id="parent">
				<div id="child">
					水平垂直居中
				</div>
			</div>
	</body>
</html>
```

## absolute&transfrom

> 父子节点都加上 position：absolute 
> 在child上加上 top：50% left：50 transfrom：translate(-50%,-50%)

### 优缺点
你懂的，就是兼用型不好，没啦


```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>水平垂直居中</title>
		<style type="text/css">
			#parent {
				width: 100%;
				height: 600px;
				background-color: #CCCCCC;
				position: absolute;
				margin: ;
			}

			#child {
				width: 200px;
				height: 200px;
				background-color: #C9394A;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%,-50%);
			}
		</style>
	</head>
	<body>
			<div id="parent">
				<div id="child">
					水平垂直居中
				</div>
			</div>
	</body>
</html>
```
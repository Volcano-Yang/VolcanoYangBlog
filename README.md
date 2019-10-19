<!-- TOC -->

- [HTML 模板](#html-模板)
    - [hello react](#hello-react)
- [ReactDOM.render()](#reactdomrender)
- [初步认识jsx语法](#初步认识jsx语法)
    - [解析规则：](#解析规则)
    - [jsx与html的变量](#jsx与html的变量)
    - [ps：补充学习js数组函数map](#ps补充学习js数组函数map)
- [自建组件component](#自建组件component)
    - [创建单标签：](#创建单标签)
    - [创建双标签：](#创建双标签)
- [render的三种写法](#render的三种写法)
    - [参数法：](#参数法)
    - [返回函数法](#返回函数法)
    - [自变函数法](#自变函数法)
- [this.props](#thisprops)
    - [获取属性](#获取属性)
    - [获取子元素](#获取子元素)
- [约束组件的属性](#约束组件的属性)
    - [PropTypes设置属性要求](#proptypes设置属性要求)
    - [getDefaultProps 设置属性默认值](#getdefaultprops-设置属性默认值)
- [虚拟节点](#虚拟节点)
- [获取组件的真实节点](#获取组件的真实节点)

<!-- /TOC -->

# 1. HTML 模板
使用 React 的网页源码，结构大致如下。
``` javascript
<!DOCTYPE html>
<html>
  <head>
    <script src="../build/react.js"></script>
    <script src="../build/react-dom.js"></script>
    <script src="../build/browser.min.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/babel">
      // ** Our code goes here! **
    </script>
  </body>
</html>
```

上面代码有两个地方需要注意。首先，最后一个 &#60;script&#62; 标签的 type 属性为 text/babel 。这是因为**React 独有的 JSX 语法，跟 JavaScript 不兼容。凡是使用 JSX 的地方，都要加上 type="text/babel"**

其次，上面代码一共用了三个库： react.js 、react-dom.js 和 Browser.js ，它们必须首先加载。其中，react.js 是 React 的核心库，react-dom.js 是提供与 DOM 相关的功能，Browser.js 的作用是将 JSX 语法转为 JavaScript 语法，这一步很消耗时间，实际上线的时候，应该将它放到服务器完成。

```
$ babel src --out-dir build
```
上面命令可以将 src 子目录的 js 文件进行语法转换，转码后的文件全部放在 build 子目录。

## 1.1. hello react

``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script src="../build/react.development.js"></script>
    <script src="../build/react-dom.development.js"></script>
    <script src="../build/babel.min.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/babel">
      ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('example')
      );
    </script>
  </body>
</html>
```

# 2. ReactDOM.render()
ReactDOM.render 是 React 的最基本方法，
**用于将模板转为 HTML 语言，并插入指定的 DOM 节点,**
你可以理解为ReactDOM.render(str,dom)，
**这个方法把前面的str插入到后面的dom内**

``` js
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
```

# 3. 初步认识jsx语法

jsx语法是可以允许同时js与html代码混写的，html代码不需要加双引号，直接使用的。

## 3.1. 解析规则：
**遇到以 < 开头，就用 HTML 规则解析
遇到以 { 开头，就用 JavaScript 规则解析**

``` js
var names = ['Alice', 'Emily', 'Kate'];

ReactDOM.render(
  <div>
  {
    names.map(function (name) {
      return <div>Hello, {name}!</div>
    })
  }
  </div>,
  document.getElementById('example')
);
```

## 3.2. jsx与html的变量
**允许直接在jsx中的html标签中利用{}插入js变量。**
如果这个变量是一个数组，则会展开这个数组的所有成员

``` js
var arr = [
  <h1>Hello world!</h1>,
  <h2>React is awesome</h2>,
];
ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('example')
);
```

## 3.3. ps：补充学习js数组函数map

**map() 方法返回一个新数组，新数组中的元素为原始数组元素顺序调用函数处理后的值。**
**注意：** map() 不会对空数组进行检测。
**注意：** map() 不会改变原始数组。

eg：
``` js
var numbers = [4, 9, 16, 25];

function myFunction() {
    x = document.getElementById("demo")
    x.innerHTML = numbers.map(Math.sqrt);
}
```
输出结果为:
2,3,4,5

map的特性
names 数组 name 元素 index 下标

# 4. 自建组件component

## 4.1. 创建单标签：
React可以使用**React.createClass 将代码封装成组件**（component），然后像插入普通 HTML 标签一样，在网页中插入这个组件。
``` js
var HelloMessage = React.createClass({
  render: function() {
    return <h1>Hello {this.props.name}</h1>;
  }
});

ReactDOM.render(
  <HelloMessage name="John" />,
  document.getElementById('example')
);
```

上面代码中，**变量 HelloMessage 就是一个组件类。模板插入 <HelloMessage /> 时，会自动生成 HelloMessage 的一个实例**（下文的"组件"都指组件类的实例）。所有组件类都必须有自己的 **render 方法，用于输出组件**。

1.注意，**组件类的第一个字母必须大写**，否则会报错，比如HelloMessage
2.下面代码会报错，因为HelloMessage组件包含了两个顶层标签：h1和p，只能有一个外包层

``` js
var HelloMessage = React.createClass({
  render: function() {
    return <h1>
      Hello {this.props.name}
    </h1><p>
      some text
    </p>;
  }
});
```
补充学习：

1.**组件的属性可以在组件类的 this.props** 对象上获取，比如 name 属性就可以通过 this.props.name 读取
2.添加组件属性，有一个地方需要注意，就是 class 属性需要写成 className ，for 属性需要写成 htmlFor ，这是因为 class 和 for 是 JavaScript 的保留字。

## 4.2. 创建双标签：

``` js
<body>
    <div id="example"></div>
    <script type="text/babel">
      class NotesList extends React.Component {
        render() {
          return (
            <ol>
              {
                React.Children.map(this.props.children, function (child) {
                  return <li>{child}</li>;
                })
              }
            </ol>
          );
        }
      }

      ReactDOM.render(
        <NotesList>
          <span>hello</span>
          <span>world</span>
        </NotesList>,
        document.getElementById('example')
      );
    </script>
  </body>
```

 class NotesList extends **React.Component**可以用来创建双标签
 

# 5. render的三种写法

## 5.1. 参数法：
``` js
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
```


## 5.2. 返回函数法
``` js
var HelloMessage = React.createClass({
  render: function() {
    return <h1>
      Hello {this.props.name}
    </h1><p>
      some text
    </p>;
  }
});
```


## 5.3. 自变函数法
``` js
  class NotesList extends React.Component {
        render() {
          return (
            <ol>
              {
                React.Children.map(this.props.children, function (child) {
                  return <li>{child}</li>;
                })
              }
            </ol>
          );
        }
      }
```

# 6. this.props

## 6.1. 获取属性
``` js
**组件的属性可以在组件类的 this.props 对象上获取**，比如 name 属性就可以通过 this.props.name 读取

var HelloMessage = React.createClass({
  render: function() {
    return <h1>Hello {this.props.name}</h1>;
  }
});

ReactDOM.render(
  <HelloMessage name="John" />,
  document.getElementById('example')
);
```



## 6.2. 获取子元素
``` js
this.props.children，它表示组件的所有子节点（使用前和使用后的加起来）

var NotesList = React.createClass({
  render: function() {
    return (
      <ol>
      {
        React.Children.map(this.props.children, function (child) {
          return <li>{child}</li>;
        })
      }
      </ol>
    );
  }
});

ReactDOM.render(
  <NotesList>
    <span>hello</span>
    <span>world</span>
  </NotesList>,
  document.body
);
```


上面代码的 NoteList 组件有两个 span 子节点，它们都可以通过 this.props.children 读取

这里需要注意， this.props.children 的值有三种可能：**如果当前组件没有子节点，它就是 undefined ;如果有一个子节点，数据类型是 object ；如果有多个子节点，数据类型就是 array** 。所以，处理 this.props.children 的时候要小心。


React 提供一个工具方法 React.Children 来处理 this.props.children 。我们可以用 **React.Children.map 来遍历子节点，而不用担心 this.props.children 的数据类型是 undefined 还是 object**


# 7. 约束组件的属性

## 7.1. PropTypes设置属性要求
有时，我们需要一种机制，验证别人使用组件时，提供的参数是否符合要求。

**组件类的PropTypes属性，就是用来验证组件实例的属性是否符合要求**
``` js
var MyTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
     return <h1> {this.props.title} </h1>;
   }
});
```

上面的Mytitle组件有一个title属性。PropTypes 告诉 React，这个 title 属性是必须的，而且它的值必须是字符串。现在，我们设置 title 属性的值是一个数值。
``` js
var data = 123;

ReactDOM.render(
  <MyTitle title={data} />,
  document.body
);
```

```
Warning: Failed propType: Invalid prop `title` of type `number` supplied to `MyTitle`, expected `string`.
```



## 7.2. getDefaultProps 设置属性默认值

**getDefaultProps 方法可以用来设置组件属性的默认值。**
``` js
var MyTitle = React.createClass({
  getDefaultProps : function () {
    return {
      title : 'Hello World'
    };
  },

  render: function() {
     return <h1> {this.props.title} </h1>;
   }
});

ReactDOM.render(
  <MyTitle />,
  document.body
);
```

# 8. 虚拟节点

组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，叫做虚拟 DOM （virtual DOM）。只有当它插入文档以后，才会变成真实的 DOM 。根据 React 的设计，所有的 DOM 变动，都先在虚拟 DOM 上发生，然后再将实际发生变动的部分，反映在真实 DOM上，这种算法叫做 DOM diff ，它可以极大提高网页的性能表现。

# 9. 获取组件的真实节点

有时需要从组件获取真实 DOM 的节点，这时就要用到**ref** 属性

var MyComponent = React.createClass({
  handleClick: function() {
    this.refs.myTextInput.focus();
  },
  render: function() {
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input type="button" value="Focus the text input" onClick={this.handleClick} />
      </div>
    );
  }
});

ReactDOM.render(
  <MyComponent />,
  document.getElementById('example')
);



**先在自定义组件里面设置ref 和 事件，然后再在handleclick里面完善事件，利用ref**


需要注意的是，由于 this.refs.[refName] 属性获取的是真实 DOM ，所以必须等到虚拟 DOM 插入文档以后，才能使用这个属性，否则会报错。上面代码中，通过为组件指定 Click 事件的回调函数，确保了只有等到真实 DOM 发生 Click 事件之后，才会读取 this.refs.[refName] 属性。

ref相当于一个只有出发hadleclike以后才生效的id


React 组件支持很多事件，除了 Click 事件以外，还有 KeyDown 、Copy、Scroll 等，完整的事件清单请查看官方文档。
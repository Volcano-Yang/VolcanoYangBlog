## DOM事件
<body>
<button>我是按钮</button>
<a href="http://www.it666.com">我是a标签</a>
<script>
    /*
    1.什么是事件?
    用户和浏览器之间的交互行为我们就称之为事件,	比如：点击，移入/移出

    2.如何给元素绑定事件?
    在JavaScript中所有的HTML标签都可以添加事件
    元素.事件名称 = function(){};
    当对应事件被触发时候就会自动执行function中的代码
    */
    let oBtn = document.querySelector("button");
    oBtn.onclick = function () {
        alert("按钮被点击了");
    }
    // 注意点: 如果给元素添加了和系统同名的事件, 我们添加的事件不会覆盖系统添加的事件
    let oA = document.querySelector("a");
    oA.onclick = function () {
        alert("a标签被点击了");
        // 以下代码的含义: 用我们添加的事件覆盖掉系统同名的事件
        return false;
    }
</script>



## 定时器


<body>
<button id="start">开始</button>
<button id="close">结束</button>
<script>
    /*
    在JavaScript中有两种定时器, 一种是重复执行的定时器, 一种是只执行一次的定时器
    */
    // 1.重复执行的定时器
    /*
    // setInterval(function () {
    //     console.log("随便写点");
    // }, 1000);
    let startBtn = document.querySelector("#start");
    let id = null;
    startBtn.onclick = function () {
        id = setInterval(function () {
            console.log("随便写点");
        }, 1000);
    }
    let closeBtn = document.querySelector("#close");
    closeBtn.onclick = function () {
        clearInterval(id);
    }
    */

    // 2.只执行一次的定时器
    // window.setTimeout(function () {
    //     console.log("随便写点");
    // }, 5000);
    let startBtn = document.querySelector("#start");
    let closeBtn = document.querySelector("#close");
    let id = null;
    startBtn.onclick = function () {
        id = window.setTimeout(function () {
            console.log("随便写点");
        }, 5000);
    }
    closeBtn.onclick = function () {
        clearTimeout(id);
    }
</script>
</body>


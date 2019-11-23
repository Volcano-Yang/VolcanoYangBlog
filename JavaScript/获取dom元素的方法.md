<div class="father">
    <form>
        <input type="text" name="test">
        <input type="password" name="test">
    </form>
</div>
<div class="father" id="box">我是div</div>

<script>
    /*
    1.通过id获取指定元素
    由于id不可以重复, 所以找到了就会将找到的标签包装成一个对象返回给我们, 找不到就返回Null
    注意点: DOM操作返回的是一个对象, 这个对象是宿主类型对象(浏览器提供的对象)
    */
    /*
    let oDiv = document.getElementById("box");
    console.log(oDiv);
    console.log(typeof oDiv);
    */

    /*
    2.通过class名称获取
    由于class可以重复, 所以找到了就返回一个存储了标签对象的数组, 找不到就返回一个空数组
    */
    /*
    let oDivs = document.getElementsByClassName("father");
    console.log(oDivs);
    */

    /*
    3.通过name名称获取
    由于name可以重复, 所以找到了就返回一个存储了标签对象的数组, 找不到就返回一个空数组
    注意点:
    getElementsByName  在不同的浏览器其中工作方式不同。在IE和Opera中， getElementsByName()  方法还会返回那些 id 为指定值的元素。
    */
    /*
    let oDivs = document.getElementsByName("test");
    console.log(oDivs);
    */

    /*
    4.通过标签名称获取
    由于标签名称可以重复, 所以找到了就返回一个存储了标签对象的数组, 找不到就返回一个空数组
    */
    /*
    let oDivs =  document.getElementsByTagName("div");
    console.log(oDivs);
    */

    /*
    5.通过选择器获取
    querySelector只会返回根据指定选择器找到的第一个元素
    */
    /*
    // let oDiv = document.querySelector("#box");
    // let oDiv = document.querySelector(".father");
    let oDiv = document.querySelector("div>form");
    console.log(oDiv);
    */

    /*
    6.通过选择器获取
    querySelectorAll会返回指定选择器找到的所有元素
    */
    let oDivs = document.querySelectorAll(".father");
    console.log(oDivs);


    // 1.获取指定元素所有的子元素
    /*
    let oDiv = document.querySelector("div");
    // children属性获取到的是指定元素中所有的子元素
    // console.log(oDiv.children);
    // childNodes属性获取到的是指定元素中所有的节点
    // console.log(oDiv.childNodes);
    for(let node of oDiv.childNodes){
        // console.log(node.nodeType);
        // if(node.nodeType === 1){
        if(node.nodeType === Node.ELEMENT_NODE){
            console.log(node);
        }
    }
    */

    /*
    2.什么是节点?
    DOM对象(document), 这个对象以树的形式保存了界面上所有的内容
    HTML页面每一部分都是由节点(标签(元素),文本,属性)
    */


    // 5.通过子元素获取父元素/父节点
    let item = document.querySelector(".item");
    // console.log(item.parentElement);
    // console.log(item.parentNode);
    // let parentEle = item.parentElement || item.parentNode;
    // console.log(parentEle);

    // 6.获取相邻上一个节点
    // console.log(item.previousSibling);
    //   获取相邻上一个元素
    // console.log(item.previousElementSibling);

    // 7.获取相邻下一个节点
    console.log(item.nextSibling);
    //   获取相邻下一个元素
    console.log(item.nextElementSibling);

## 节点的增删改查

    // 1.创建节点
    // let oSpan = document.createElement("span");
    // console.log(oSpan);
    // console.log(typeof oSpan);

    // 2.添加节点
    // 注意点: appendChild方法会将指定的元素添加到最后
    // let oDiv = document.querySelector("div");
    // oDiv.appendChild(oSpan)
    // let oA = document.createElement("a");
    // oDiv.appendChild(oA);

    // 3.插入节点
    // let oSpan = document.createElement("span");
    // let oDiv = document.querySelector("div");
    // let oH1 = document.querySelector("h1");
    // let oP = document.querySelector("p");
    // // oDiv.insertBefore(oSpan, oH1);
    // oDiv.insertBefore(oSpan, oP);

    // 5.删除节点
    // 注意点: 在js中如果想要删除某一个元素, 只能通过对应的父元素来删除
    //         元素是不能够自杀的
    // console.log(oSpan.parentNode);
    // oSpan.parentNode.removeChild(oSpan);
    // oDiv.parentNode.removeChild(oDiv);

    // 5.克隆节点
    // 注意点: cloneNode方法默认不会克隆子元素, 如果想克隆子元素需要传递一个true
    let oDiv = document.querySelector("div");
    // let newDiv =  oDiv.cloneNode();
    let newDiv =  oDiv.cloneNode(true);
    console.log(newDiv);






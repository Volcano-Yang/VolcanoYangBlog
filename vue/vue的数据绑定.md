# vue的数据绑定

## 1.单向数据绑定
M->V
- {{}}模板
- v-bind、v-html、v-text指令


``` js
<div id="app">
    <p>{{ name }}</p>
</div>
<script>
    // 这里就是MVVM中的View Model
    let vue = new Vue({
        el: '#app',
        // 这里就是MVVM中的Model
        data: {
            name: "李南江"
        }
    });
</script>
</body>
</html>
```
注意{{}}中可以放表达式，进行一些操作

## 2. 双向数据绑定

V<->M
- v-model

```
在<input>、<textarea> 及 <select> 元素上可以用 v-model 指令创建双向数据绑定
```

注意点: 
- v-model 会忽略所有表单元素的 value、checked、selected 特性的初始值,而总是将 Vue 实例的数据作为数据来源。
- 如果想要给输入框加说明，只能使用
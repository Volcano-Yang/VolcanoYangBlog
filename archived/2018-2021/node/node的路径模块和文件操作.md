# node中的路径和文件操作

node作为一个可以作为服务端的语言，自然少不了对文件操作的API，其中最重要的就是path模块和fs模块。

# node的路径操作

## 常用的两个node路径变量

### __filename
获取当前文件的这绝对路径

### __dirname
获取这个文件所的目录路径


## node中的路径模块

1.获取路径的最后一部分
path.basename(path[, ext])

``` js
basename用于获取路径的最后一个组成部分,ext参数是用来过滤掉文件后缀
let res = path.basename('/a/b/c/d/index.html'); //index.html
let res = path.basename('/a/b/c/d');  //d
let res = path.basename('/a/b/c/d/index.html', ".html"); //index
```

2.获取所在目录路径
path.dirname(path)

``` js
dirname用于获取路径中的目录, 也就是除了最后一个部分以外的内容
let res = path.dirname('/a/b/c/d/index.html'); // /a/b/c/d
let res = path.dirname('/a/b/c/d');            // /a/b/c
```

3.获取扩展名称
path.extname(path)

4.拼接路径
path.join([...paths])
注意点:
如果参数中没有添加/, 那么该方法会自动添加
如果参数中有.., 那么会自动根据前面的参数生成的路径, 去到上一级路径

``` js
let str = path.join("/a/b", "c"); // /a/b/c
let str = path.join("/a/b", "/c"); // /a/b/c
let str = path.join("/a/b", "/c", "../"); // /a/b/c --> /a/b
let str = path.join("/a/b", "/c", "../../"); // /a/b/c --> /a
```

5.计算相对路径
path.relative(from, to)

``` js
第一个参数: /data/orandea/test/aaa
第二个参数: /data/orandea/impl/bbb
..\..\impl\bbb
```

6.转换路径的格式
path.parse()  string->obj
path.format() obj->string

``` js
let pathstr="/a/b/c/d/index.html";

let pathObject = {
    root: '/',
    dir: '/a/b/c/d',
    base: 'index.html',
    ext: '.html',
    name: 'index'
};

path.parse(pathstr): 用于将路径转换成对象
// {
//   root: '/',
//   dir: '/a/b/c/d',
//   base: 'index.html',
//   ext: '.html',
//   name: 'index'
// }
path.format(pathObject): 用于将对象转换成路径

// "/a/b/c/d/index.html"

```

其他api:

1.规范化路径
path.normalize(path)

2.判断是否是绝对路径
path.isAbsolute(path)

```
isAbsolute用于判断路径是否是一个绝对路径
注意点:
区分操作系统
在Linux操作系统中/开头就是绝对路径
在Windows操作系统中盘符开头就是绝对路径

在Linux操作系统中路径的分隔符是左斜杠 /
在Windows操作系统中路径的分隔符是右斜杠 \
```

3.获取当前操作系统路径分隔符
path.delimiter  （windows是\ Linux是/）

4.获取当前路径环境变量分隔符
path.sep  (windows中使用; linux中使用:)


#　node的文件操作

> 这里的api偏多，最好就是自己掌握怎么用，然后每次用的时候来看一下api文档

１．查看文件状态

fs.stat(path，callback)

fs.statSync(path)

> 带sync的api都是串行同步操作，结果会以返回值的形式传递回来
> 不带sync的api都是并行异步操作，结果会通过回调函数的形式传递回来

``` js
//写法一
let fs = require("fs");
fs.stat(__dirname, function (err, stats) {
    //一般返回结果的回调函数都是有两个参数，一个是error，一个是data
    //error为０表示无错误
    // birthtime: 文件的创建时间
    // mtime: 文件中内容发生变化, 文件的修改时间
    console.log(stats);
    if(stats.isFile()){
        console.log("当前路径对应的是一个文件");
    }else if(stats.isDirectory()){
        console.log("当前路径对应的是一个文件夹");
    }
});


//写法二
let stats = fs.statSync(__filename);
console.log(stats);
```

２．文件读取

fs.readFile(path[, options], callback)

fs.readFileSync(path[, options])

注意点:
没有指定第二个参数, 默认会将读取到的数据放到Buffer中
第二个参数指定为utf8, 返回的数据就是字符串

``` js
let fs = require("fs");
let path = require("path");

// 1.拿到需要读取的文件路径
let str = path.join(__dirname, "data.txt");
console.log(str);
// 2.读取文件
//方法一
fs.readFile(str,"utf8", function (err, data) {
    if(err){
        throw new Error("读取文件失败");
    }
    console.log(data);
    // console.log(data.toString());
});
 
//方法二
let data = fs.readFileSync(str, "utf8");
console.log(data);
```


３．文件写入（会覆盖）

fs.writeFile(file, data[, options], callback)

fs.writeFileSync(file, data[, options])

``` js

let fs = require("fs");
let path = require("path");

// 1.拼接写入的路径
let str = path.join(__dirname, "lnj.txt");

// 2.写入数据

fs.writeFile(str, "知播渔 www.it666.com", "utf-8", function (err) {
 

let res = fs.writeFileSync(str, "知播渔 www.it666.com", "utf-8");

console.log(res);
```

４．追加写入

fs.appendFile(path, data[, options], callback)

fs.appendFileSync(path, data[, options])

``` js
let fs = require("fs");
let path = require("path");

// 1.拼接写入的路径
let str = path.join(__dirname, "lnj.txt");

// 2.开始追加数据
fs.appendFile(str, "知播渔", "utf8", function (err) {
    if(err){
        throw new Error("追加数据失败");
    }else{
        console.log("追加数据成功");
    }
});

```

５．大文件操作

前面讲解的关于文件写入和读取操作都是一次性将数据读入内存或者一次性写入到文件中，是如果数据比较大, 直接将所有数据都读到内存中会导致计算机内存爆炸,卡顿,死机等，容易造成失业，所以上面两个api可以说是基本不能用。所以对于比较大的文件我们需要分批读取和写入。

fs.createReadStream(path[, options])

fs.createWriteStream(path[, options])

> 读这里的代码要有异步思维，不要执念与顺序操作。

``` js
let fs = require("fs");
let path = require("path");

/*
// 1.拼接读取的路径
let str = path.join(__dirname, "lnj.txt");
// 2.创建一个读取流
let readStream = fs.createReadStream(str, {encoding : "utf8", highWaterMark : 1});
// 3.添加事件监听
readStream.on("open", function () {
    console.log("表示数据流和文件建立关系成功");
});
readStream.on("error", function () {
    console.log("表示数据流和文件建立关系失败");
});
readStream.on("data", function (data) {
    console.log("表示通过读取流从文件中读取到了数据", data);
});
readStream.on("close", function () {
    console.log("表示数据流断开了和文件的关系, 并且数据已经读取完毕了");
});
 */

/*
// 1.拼接写入的路径
let str = path.join(__dirname, "it666.txt");
// 2.创建一个写入流
let writeStream = fs.createWriteStream(str, {encoding : "utf8"});
// 3.监听写入流的事件
writeStream.on("open", function () {
    console.log("表示数据流和文件建立关系成功");
});
writeStream.on("error", function () {
    console.log("表示数据流和文件建立关系失败");
});
writeStream.on("close", function () {
    console.log("表示数据流断开了和文件的关系");
});
let data = "www.it666.com";
let index = 0;
let timerId = setInterval(function () {
    let ch = data[index];
    index++;
    writeStream.write(ch);
    console.log("本次写入了", ch);
    if(index === data.length){
        clearInterval(timerId);
        writeStream.end();
    }
}, 1000);
*/

/*
// 1.生成读取和写入的路径
let readPath = path.join(__dirname, "test.mp4");
let writePath = path.join(__dirname, "abc.mp4");
// 2.创建一个读取流
let readStream = fs.createReadStream(readPath);
// 3.创建一个写入流
let writeStream = fs.createWriteStream(writePath);
// 4.监听读取流事件
readStream.on("open", function () {
    console.log("表示数据流和文件建立关系成功");
});
readStream.on("error", function () {
    console.log("表示数据流和文件建立关系失败");
});
readStream.on("data", function (data) {
    // console.log("表示通过读取流从文件中读取到了数据", data);
    writeStream.write(data);
});
readStream.on("close", function () {
    console.log("表示数据流断开了和文件的关系, 并且数据已经读取完毕了");
    writeStream.end();
});
// 5.监听写入流的事件
writeStream.on("open", function () {
    console.log("表示数据流和文件建立关系成功");
});
writeStream.on("error", function () {
    console.log("表示数据流和文件建立关系失败");
});
writeStream.on("close", function () {
    console.log("表示数据流断开了和文件的关系");
});
 */

/*
// 1.生成读取和写入的路径
let readPath = path.join(__dirname, "test.mp4");
let writePath = path.join(__dirname, "abc.mp4");
// 2.创建一个读取流
let readStream = fs.createReadStream(readPath);
// 3.创建一个写入流
let writeStream = fs.createWriteStream(writePath);
// 利用读取流的管道方法来快速的实现文件拷贝
readStream.pipe(writeStream);
*/

```


６.创建目录

fs.mkdir(path[, mode], callback)

fs.mkdirSync(path[, mode])

７．读取目录

fs.readdir(path[, options], callback)

fs.readdirSync(path[, options])

８．删除目录

fs.rmdir(path, callback)

fs.rmdirSync(path)

```
利用NodeJS生成项目模板
projectName
   |---images
   |---css
   |---js
   |---index.html
```

``` js
let fs = require("fs");
let path = require("path");

class CreateProject {
    constructor(rootPath, projectName){
        this.rootPath = rootPath;
        this.projectName = projectName;
        this.subFiles = ["images", "css", "js", "nj.js.html"];
    }
    initProject(){
        // 1.创建站点文件夹
        let projectPath = path.join(this.rootPath, this.projectName);
        fs.mkdirSync(projectPath);
        // 2.创建子文件和子目录
        this.subFiles.forEach(function (fileName) {
            if(path.extname(fileName) === ""){
                let dirPath = path.join(projectPath, fileName);
                fs.mkdirSync(dirPath);
            }else{
                let filePath = path.join(projectPath, fileName);
                fs.writeFileSync(filePath, "");
            }
        })
    }
}

let cp = new CreateProject(__dirname, "taobao");
cp.initProject();
```
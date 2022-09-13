
## node中的包管理

在模块化开发中,在一个模块(一个文件中)尽量只完成一个特定的功能.但是有些比较复杂的功能可能需要由多个模块组成,那么这个时候我们就需要一个东西来维护多个模块之间的关系,这个维护多个模块之间关系的东西就是"包",一个包中可以有一个或多个模块。

在NodeJS中为了方便开发人员发布、安装和管理包, NodeJS推出了一个包管理工具
NPM(Node Package Manager)

## 常用的npm指令

1. NPM包安装方式
- 全局安装  (一般用于安装全局使用的工具, 存储在全局node_modules中)
npm install -g 包名   (默认安装最新版本)
npm uninstall -g 包名
npm update -g 包名   (更新失败可以直接使用install)

- 本地安装 (一般用于安装当前项目使用的包, 存储在当前项目node_modules中)
npm install 包名
npm uninstall 包名
npm update 包名


2. 初始化本地包
npm init   ->  初始化package.json文件
npm init -y -> 初始化package.json文件
npm install 包名 --save
npm install 包名 --save-dev
包描述文件 package.json, 定义了当前项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。
npm install 命令根据这个配置文件，自动下载所需的模块，也就是配置项目所需的运行和开发环境
注意点:package.json文件中, 不能加入任何注释
- dependencies：生产环境包的依赖，一个关联数组，由包的名称和版本号组成
- devDependencies：开发环境包的依赖，一个关联数组，由包的名称和版本号组成
  
1.将项目拷贝给其它人, 或者发布的时候, 我们不会将node_modules也给别人, 因为太大
2.因为有的包可能只在开发阶段需要, 但是在上线阶段不需要, 所以需要分开指定
npm i               所有的包都会被安装
npm i --production  只会安装dependencies中的包
npm i --development  只会安装devDependencies中的包

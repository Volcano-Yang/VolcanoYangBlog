# 入坑 markdown 的正确方法

> 在我学习开发的时候，不是一次两次想要用 md 来记录我的心得，但是往往因为**同步、贴图、不能在手机查看**等问题而劝退。

## 最优解：

最后我终于自己摸索出了一个完美解决这个三大难题的方案：**vscode+markdown 插件优化+github 同步+github pages 多端查看**

- **vscode 插件** 中的 markdown all in one 插件支持在插入图片的同时帮你把图片放在 md 文件的 asset 文件夹中，这样就可以让图片不再会因为绝对路径失效而看不到

- **github 同步** 则可以用非常程序员的方式保证你的开发笔记不会丢失，如果你想要做的更好些，可以使用坚果云的增量自动更新功能

- **github pages** 则是让我不再苦于寻找全平台都有的笔记软件，只要把 github pages 的自适应做好一点，想在什么设备看都可以，要是再加上 vpn 简直美滋滋

## 好用的 markdown vscode 插件

| 名字                      | 作用                                                                 |
|---------------------------|--------------------------------------------------------------------|
| Markdown All in One       | 基础功能最全的 md 插件                                               |
| Markdown Preview Enhanced | 最好的预览 md 插件，同时还有 image helper、导出各种格式、标题导航等功能 |
| Markdown TOC              | 自动根据标题目录号码，同时一键插入目录                                |
| MarkDown Link Suggestions | 可以在设置超链接时有提示                                             |
| Markdown Table Prettifier | md 表格美化                                                          |
| Excel to Markdown table   | 支持在 excel 中复制表格到 md                                         |
| Markdown Image Size       | 支持 md 的设置图片大小的语法                                         |
| markdown image paste      | 支持复制图片文件后直接粘贴到 md                                      |

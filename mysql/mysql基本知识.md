# 前端需要知道的mysql基本知识

## mysql控制台基本操作

#### 登录MySQL

> $ mysql -u name password

#### 退出MySQL数据库服务器

> exit;

## databases操作

#### 显示所有数据库

> show databases;

#### 创建数据库

> CREATE DATABASE test;

#### 切换数据库

> use test;

#### 删除数据库

> drop database test

## table操作

#### 显示所有表格
> show tables;

#### 创建表格
> CREATE TABLE pet (
>    name VARCHAR(20),
>    owner VARCHAR(20),
>    species VARCHAR(20),
>    sex CHAR(1),
>    birth DATE,
>    death DATE
>    );

#### 查看表格结构
> desc pet;

#### 删除表格
> DROP TABLE pet ;

### 基本的增删改查

#### 插入数据

> 满属性插入：INSERT INTO 表名 VALUES ('v1', 'v2', 'v3', 'v4', 'v5', NULL);
> 指定属性插入：INSERT INTO 表名 (`col1`,`col2`,`col3`) VALUES (v1,v2,v3);
> 注意有些语言col名前面要加左上角的单引号

#### 删除数据

> DELETE FROM 表名 where col？ = '？？？';

#### 修改数据

> UPDATE 表名 SET col？ = '????' where col?? = '?????';

#### 查找数据

> SELECT * from 表名;
> SELECT col1,col2,col3... from 表名;
> SELECT * from 表名 where col? = '???' ;


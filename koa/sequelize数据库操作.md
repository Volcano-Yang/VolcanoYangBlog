# sequelize入门

> 总结：
> 1. Sequelize是一个数据库构造函数，同时里面包含了一些建表的定义类型方法（个人感觉这部分最好移出来独立，hh）
>
> 2. model是一个建表的基类方法。在我们建表定义好数据模型之后，要挂载到Sequelize实例中去。
>
> 3. 调用关系：
>
>    sequelize-init.js（创建连接数据库的sequelize实例） ---- model-user.js（创建model实例然后绑定到sequelize实例上）----  api.js（操作创建的model实例）
>
>    

## 一、sequelize实例创建和数据库连接

```javascript
// core/db.js
const { Sequelize } = require("sequelize");

const { dbName, user, password, host, port } = require("../config").dataBase;

const sequelize = new Sequelize(dbName, user, password, {
  dialect: "mysql",
  host,
  port,
  logging: true,
  timezone: "+08:00",
  define: {
    // sequelize自动帮助我们创建create_time  update_time delete_time三个值，委托软删除
    timestamps: true,
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    // 将所有的驼峰换成下划线
    underscored: true,
    // 模型名和数据库表名一致
    freezeTableName: true, 
    scopes: {
      bh: {
        attributes: {
          exclude: ["updated_at", "deleted_at", "created_at"],
        },
      },
    },
  },
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

// 在连接数据库后自动同步所有的model
sequelize.sync({
    // 先强制删除后创建
  force: true,
});

module.exports = {
  db: sequelize,
};

```

```javascript
// config.js
module.exports = {
  dataBase: {
    dbName: "koa-test",
    user: "root",
    password: "a15728233159!",
    host: "cdb-qq4dct6u.cd.tencentcdb.com",
    port: 10192,
  },
};
```

## 二、模型定义和数据库表建立

在 Sequelize 中可以用两种等效的方式定义模型：

- 调用 [`sequelize.define(modelName, attributes, options)`](https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-method-define)
- 扩展 [Model](https://sequelize.org/master/class/lib/model.js~Model.html) 并调用 [`init(attributes, options)`](https://sequelize.org/master/class/lib/model.js~Model.html#static-method-init)

模型是代表数据库中表的抽象

```javascript
const { Sequelize, Model } = require("sequelize");

const { db } = require("../core/db");

class User extends Model {}

User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nickname: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    openId: {
      type: Sequelize.STRING(64),
      unique: true,
    },
  },
  {
    sequelize: db,
    tableName: "user",
  }
);
```

## 三、表字段限制

```javascript
{
  	// 限制数据类型
  	key2: Sequelize.STRING,
    // 设置主键
  	key1: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // 设置默认值
    key3: {
    type: DataTypes.STRING,
    defaultValue: "John Doe"
  	},
    // 限制长度
    key4: {
      type: Sequelize.STRING(64),
      unique: true,
    },
 }

 更多数据类型查看：https://github.com/demopark/sequelize-docs-Zh-CN/blob/master/core-concepts/model-basics.md

```

## 四、CURD

### （1）创建记录用：model.create(obj)

```javascript
// api/xxx

router.get("/register", async (ctx, next) => {
    console.log("user register");
    const user = {
        email: '648941183@qq.com',
        password: '123456',
        nickname: 'volcano'
    }

    await User.create(user)
    ctx.body = "user register";
  });
```

https://github.com/demopark/sequelize-docs-Zh-CN/blob/master/core-concepts/model-instances.md

### （2）查询记录用：model.findAll({xxx:yyy})

读取表中所有记录的所有属性
```javascript
const users = await User.findAll();
console.log(users.every(user => user instanceof User)); // true
console.log("All users:", JSON.stringify(users, null, 2));
// SELECT * FROM ...
```

读取表中所有记录的部分属性

```javascript
Model.findAll({
  attributes: ['foo', 'bar']
});
// SELECT foo, bar FROM ...

Model.findAll({
  attributes: { exclude: ['baz'] }
});
// 反选
```
where条件查询1
```javascript
Post.findAll({
  where: {
    authorId: 12
    status: 'active'
  }
});
// SELECT * FROM post WHERE authorId = 12 AND status = 'active';
```
where条件查询2
```javascript
Post.findAll({
  where: {
    id: [1,2,3] // 等同使用 `id: { [Op.in]: [1,2,3] }`
  }
});
// SELECT ... FROM "posts" AS "post" WHERE "post"."id" IN (1, 2, 3);
```

Sequelize 提供了多种运算符.

```javascript
const { Op } = require("sequelize");
Post.findAll({
  where: {
    [Op.and]: [{ a: 5 }, { b: 6 }],            // (a = 5) AND (b = 6)
    [Op.or]: [{ a: 5 }, { b: 6 }],             // (a = 5) OR (b = 6)
    someAttribute: {
      // 基本
      [Op.eq]: 3,                              // = 3
      [Op.ne]: 20,                             // != 20
      [Op.is]: null,                           // IS NULL
      [Op.not]: true,                          // IS NOT TRUE
      [Op.or]: [5, 6],                         // (someAttribute = 5) OR (someAttribute = 6)

      // 使用方言特定的列标识符 (以下示例中使用 PG):
      [Op.col]: 'user.organization_id',        // = "user"."organization_id"

      // 数字比较
      [Op.gt]: 6,                              // > 6
      [Op.gte]: 6,                             // >= 6
      [Op.lt]: 10,                             // < 10
      [Op.lte]: 10,                            // <= 10
      [Op.between]: [6, 10],                   // BETWEEN 6 AND 10
      [Op.notBetween]: [11, 15],               // NOT BETWEEN 11 AND 15

      // 其它操作符

      [Op.all]: sequelize.literal('SELECT 1'), // > ALL (SELECT 1)

      [Op.in]: [1, 2],                         // IN [1, 2]
      [Op.notIn]: [1, 2],                      // NOT IN [1, 2]

      [Op.like]: '%hat',                       // LIKE '%hat'
      [Op.notLike]: '%hat',                    // NOT LIKE '%hat'
      [Op.startsWith]: 'hat',                  // LIKE 'hat%'
      [Op.endsWith]: 'hat',                    // LIKE '%hat'
      [Op.substring]: 'hat',                   // LIKE '%hat%'
      [Op.iLike]: '%hat',                      // ILIKE '%hat' (不区分大小写) (仅 PG)
      [Op.notILike]: '%hat',                   // NOT ILIKE '%hat'  (仅 PG)
      [Op.regexp]: '^[h|a|t]',                 // REGEXP/~ '^[h|a|t]' (仅 MySQL/PG)
      [Op.notRegexp]: '^[h|a|t]',              // NOT REGEXP/!~ '^[h|a|t]' (仅 MySQL/PG)
      [Op.iRegexp]: '^[h|a|t]',                // ~* '^[h|a|t]' (仅 PG)
      [Op.notIRegexp]: '^[h|a|t]',             // !~* '^[h|a|t]' (仅 PG)

      [Op.any]: [2, 3],                        // ANY ARRAY[2, 3]::INTEGER (仅 PG)

      // 在 Postgres 中, Op.like/Op.iLike/Op.notLike 可以结合 Op.any 使用:
      [Op.like]: { [Op.any]: ['cat', 'hat'] }  // LIKE ANY ARRAY['cat', 'hat']

      // 还有更多的仅限 postgres 的范围运算符,请参见下文
    }
  }
});
```

#### 示例

```javascript
const { Op } = require("sequelize");

Foo.findAll({
  where: {
    rank: {
      [Op.or]: {
        [Op.lt]: 1000,
        [Op.eq]: null
      }
    },
    // rank < 1000 OR rank IS NULL
    {
      [Op.or]: [
        {
          title: {
            [Op.like]: 'Boat%'
          }
        },
        {
          description: {
            [Op.like]: '%boat%'
          }
        }
      ]
    }
    // title LIKE 'Boat%' OR description LIKE '%boat%'
  }
});
```

还有很多其他复杂的查询和聚合方式：

https://github.com/demopark/sequelize-docs-Zh-CN/blob/master/core-concepts/model-querying-basics.md

### （3）更新记录用：model.updata(obj,whereObj)

Update 查询也接受 `where` 参数,就像上面的读取查询一样.

```javascript
// 将所有没有姓氏的人更改为 "Doe"
await User.update({ lastName: "Doe" }, {
  where: {
    lastName: null
  }
});
```

### （4）删除记录用：model.destroy(obj,whereObj)

Delete 查询也接受 `where` 参数,就像上面的读取查询一样.

```javascript
// 删除所有名为 "Jane" 的人 
await User.destroy({
  where: {
    firstName: "Jane"
  }
});
```

## 五、实用方法

Sequelize 还提供了一些实用方法.

### `count`

`count` 方法仅计算数据库中元素出现的次数.

```javascript
console.log(`这有 ${await Project.count()} 个项目`);

const amount = await Project.count({
  where: {
    id: {
      [Op.gt]: 25
    }
  }
});
console.log(`这有 ${amount} 个项目 id 大于 25`);
```

### `max`, `min` 和 `sum`

Sequelize 还提供了 max,min 和 sum 便捷方法.

假设我们有三个用户,分别是10、5和40岁.

```
await User.max('age'); // 40
await User.max('age', { where: { age: { [Op.lt]: 20 } } }); // 10
await User.min('age'); // 5
await User.min('age', { where: { age: { [Op.gt]: 5 } } }); // 10
await User.sum('age'); // 55
await User.sum('age', { where: { age: { [Op.gt]: 5 } } }); // 50
```

## 六、排序

`order` 参数采用一系列 *项* 来让 sequelize 方法对查询进行排序. 这些 *项* 本身是 `[column, direction]` 形式的数组. 该列将被正确转义,并且将在有效方向列表中进行验证(例如 `ASC`, `DESC`, `NULLS FIRST` 等).

```javascript
Subtask.findAll({
  order: [
    // 将转义 title 并针对有效方向列表进行降序排列
    ['title', 'DESC'],
]}
```

## 七、限制和分页

使用 `limit` 和 `offset` 参数可以进行 限制/分页：

```
// 提取10个实例/行
Project.findAll({ limit: 10 });

// 跳过8个实例/行
Project.findAll({ offset: 8 });

// 跳过5个实例,然后获取5个实例
Project.findAll({ offset: 5, limit: 5 });
```
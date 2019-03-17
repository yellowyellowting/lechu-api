## 一、运行

##### clone代码

```
git clone https://github.com/yellowyellowting/lechu-api.git
```

##### 安装依赖

```
yarn
```

##### 启动服务器

```
yarn start
```

## 二、API文档

### 1.注册

##### 请求地址

```
POST    {HOST}/user/register
```

##### 请求参数

参数名 | 参数描述
---|---
mobile | 手机号
code | 验证码
password | 密码

##### 响应内容

```
{
    "code": 0,
    "message": "api success",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJpYXQiOjE1NTI3ODgzNjIsImV4cCI6MTU1MzM5MzE2Mn0.YlaoeT0Y8--ZauOBlnXI3wNt7B54sYh-3eNmpFyBrzk",
        "user": {
            "id": 10,
            "username": "乐厨1552748300343",
            "mobile": "18884166534",
            "email": null,
            "created_at": 1552748300343
        }
    }
}
```

### 2.登录

##### 请求地址

```
POST    {HOST}/user/login
```

##### 请求参数

参数名 | 参数描述
---|---
mobile | 手机号
password | 密码

##### 响应内容

```
{
    "code": 0,
    "message": "api success",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJpYXQiOjE1NTI3ODgzNjIsImV4cCI6MTU1MzM5MzE2Mn0.YlaoeT0Y8--ZauOBlnXI3wNt7B54sYh-3eNmpFyBrzk",
        "user": {
            "id": 10,
            "username": "乐厨1552748300343",
            "mobile": "18884166534",
            "email": null,
            "created_at": 1552748300343
        }
    }
}
```
### 3.注册发送验证码

##### 请求地址

```
POST    {HOST}/user/sendSMS
```

##### 请求参数

参数名 | 参数描述
---|---
mobile | 手机号

##### 响应内容

```
{
    "code": 0,
    "message": "api success",
    "data": null
}
```

### 4.获取用户信息

##### 请求地址

```
GET    {HOST}/user/profile
```

##### 请求参数

参数名 | 参数描述
---|---
token | 身份令牌，登录获取的token

##### 响应内容

```
{
    "code": 0,
    "message": "api success",
    "data": {
        "id": 10,
        "username": "乐厨1552748300343",
        "mobile": "18884166534",
        "email": null,
        "created_at": 1552748300343
    }
}
```

### 5.获取流行菜谱

##### 请求地址

```
GET    {HOST}/recipe/pop
```

##### 请求参数

无

##### 响应内容

```
{
    "code": 0,
    "message": "api success",
    "data": [
        {
            "id": "102122269",
            "name": "【电饭锅】一只番茄饭 番茄拌饭",
            "thumbnail": "http://i1.chuimg.com/a9e101fa8b7311e6a9a10242ac110002_1968w_2624h.jpg@2o_50sh_1pr_1l_235w_138h_1c_1e_90q_1wh",
            "cookId": "112064570",
            "cookName": "李果然",
            "stats": "1806 做过"
        },
        {
            "id": "103704010",
            "name": "香烤鸡翅",
            "thumbnail": "http://i1.chuimg.com/022d207fc8fa4d3d8c2e63d617045e15_6000w_4000h.jpg@2o_50sh_1pr_1l_235w_138h_1c_1e_90q_1wh",
            "cookId": "120967814",
            "cookName": "博世家电",
            "stats": "11 做过"
        },
        // ......
    ]
}
```

### 6.创建菜谱

##### 请求地址

```
POST    {HOST}/recipe/create
```

##### 请求参数

类似如下的json数据
```
{
    "name": "水煮肉片（吃不够的下饭菜）", 
    "cover": "http://i2.chuimg.com/e5b42524885b11e6b87c0242ac110003_650w_650h.jpg?imageView2/2/w/660/interlace/1/q/90", 
    "description": "第一次吃水煮肉片是很小的时候 那时候只知道肿么会有这么好吃的菜，对胃口，够麻辣", 
    "steps": [
        {
            "description": "将肉切成薄片 加入淀粉 料酒 老抽 拌匀后备用（因为我以前做完感觉肉发白 不香 所以这次抓肉的时候就放老抽 ）", 
            "picUrl": "http://i2.chuimg.com/d8d1966499e211e69ce70242ac110002_650w_650h.jpg?imageView2/2/w/300/interlace/1/q/90", 
            "order": 1
        },
        {
            "description": "我喜欢带豆腐皮的 切丝 用开水焯一下备用", 
            "picUrl": "http://i2.chuimg.com/d88a94b299e211e69ce70242ac110002_650w_650h.jpg?imageView2/2/w/300/interlace/1/q/90", 
            "order": 2
        },
    ]
}
```

##### 请求头

头名称 | 头描述
---|---
Content-Type | 内容类型，必须为：application/json
x-access-token | 登录获取到的身份令牌（token）

##### 响应内容

```
{
    "code": 0,
    "message": "api success",
    "data": "菜谱创建成功"
}
```

### 7.获取菜谱详情

##### 请求地址

```
GET    {HOST}/recipe/detail
```

##### 请求参数

参数名称 | 参数描述
---|---
id | 菜谱ID

##### 响应内容

```
{
    "code": 0,
    "message": "api success",
    "data": {
        "id": 3,
        "user_id": 10,
        "name": "水煮肉片（吃不够的下饭菜）",
        "cover": "http://i2.chuimg.com/e5b42524885b11e6b87c0242ac110003_650w_650h.jpg?imageView2/2/w/660/interlace/1/q/90",
        "description": "第一次吃水煮肉片是很小的时候，那时候只知道，哇！ 肿么会有这么好吃的菜，对胃口，够麻辣",
        "created_at": 1552805160343,
        "steps": [
            {
                "id": 2,
                "recipe_id": 3,
                "description": "将肉切成薄片 加入淀粉 料酒 老抽 拌匀后备用（因为我以前做完感觉肉发白 不香 所以这次抓肉的时候就放老抽 ）",
                "pic_url": "http://i2.chuimg.com/d8d1966499e211e69ce70242ac110002_650w_650h.jpg?imageView2/2/w/300/interlace/1/q/90",
                "order": 1,
                "created_at": 1552805160362
            },
        ]
    }
}
```
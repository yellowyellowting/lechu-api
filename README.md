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

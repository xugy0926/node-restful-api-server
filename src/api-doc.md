以下 api 路径均以 `https://js.xinshengdaxue.com` 为前缀


## 获取心里话

```
[GET] /api/v1/learnJS/course/:id/words

id: 第一期课程为1
```

#### 结果
```
{
  code, // 1: 处理正常，2：处理错误
  words
}
```

## 获取课程基本信息

```
[GET] /api/v1/learnJS/course/:id/detail

id: 第一期课程为1
```

#### 结果
```
{
  code, // 1: 处理正常，2：处理错误
  courseInfo
}
```

## 获取课程的文档信息

```
[GET] /api/v1/learnJS/course/:id/catelog

id: 第一期课程为1
```

#### 结果
```
{
  code, // 1: 处理正常，2：处理错误
  catelog
}
```

## 获取课程的同学作业列表

```
[GET] /api/v1/learnJS/course/:id/homework/:number

id: 第一期课程为1
number: 第一节为1
```

#### 结果
```
{
  code, // 1: 处理正常，2：处理错误
  homeworks
}
```

## 获取课程的团队信息

```
[GET] /api/v1/learnJS/course/:id/teams

id: 第一期课程为1
```

#### 结果
```
{
  code, // 1: 处理正常，2：处理错误
  teams
}
```

## 对老师有话说

```
[POST] /api/v1/learnJS/sayToMe

body: {
  name: '你的大名',
  account: '新生大学注册时用的手机号或邮箱',
  content: '对老师说的话'
}
```

#### 结果
```
{
  code, // 1: 处理正常，2：处理错误
  message,
  data,
}
```
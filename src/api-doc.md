## 获取心里话

```
[GET] /api/v1/learnJS/course/:id/words

id: 第一期课程为1
```

#### 结果
```
{
  code,
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
  code,
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
  code,
  catelog
}
```

## 获取课程的同学作业信息

```
[GET] /api/v1/learnJS/course/:id/homework/:number

id: 第一期课程为1
number: 第一节为1
```

#### 结果
```
{
  code,
  catelog
}
```
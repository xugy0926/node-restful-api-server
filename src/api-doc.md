## 获取课程基本信息

#### common api
[GET] /api/v1/learnJS/course/:id/detail

id: 第一期课程为1，第二期课程为2

```
{
  result: {
    code: 1,
    courseInfo: {...}
  }
}
```

#### graphql api

```
[GET] 
{
  courseInfo {
    title
    teacher
    teacherAvatar
  }
}
```

## 获取课程的文档信息

[GET] /api/v1/learnJS/course/:id/catelog

id: 第一期课程为1，第二期课程为2

```
{
  result: {
    code: 1,
    catelog: {...}
  }
}
```
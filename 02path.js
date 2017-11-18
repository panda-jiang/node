'use strict'
//引入核心对象path
const path = require('path')

//拼接并修正路径
let mypath = path.join(__dirname, '////xixi', '//haha', 'hehe')

//通过字符串方法解析成对象
let pathObj = path.parse(mypath)

console.log(pathObj)

//可以修改对象属性
pathObj.name = 'zhangsan'
console.log(pathObj)

let newPath = path.format(pathObj)

console.log(newPath)//打印出来的内容为社么不是修改成‘zhangsan’后的
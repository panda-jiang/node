'use strict'
const fs = require('fs')
const path = require('path')

console.log('加载cal.js之前')
let myCal = require('./cal.js')
console.log('记载cal.js之后')

let myjson = require('./1.json')
console.log(myjson)

myjson.name = 'zhangsan'

fs.writeFile(path.join(__dirname, '1.json'),myjson, (err) => {
    if(err) throw err
    console.log('文件写入成功')
})
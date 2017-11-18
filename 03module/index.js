'use strict'

let myCal = require('./cal.js')

let num1 = process.argv[2] - 0
let num2 = process.argv[3] - 0

//将num1 + num2来运算
let sum = myCal.add(num1,num2)

//展示结果
console.log(sum)
// console.log('server file is running');

// function add(a,b){
//     return a+b;
// }
// const result = add(2,5);
// console.log(result);
// (function(){
//     console.log('hanamant');
// }());


// function callBack(){
//     console.log('adding successfully complete')
// }

// const addition = function(a,b,callBack){
//     // const result = 2;
//     const result = a+b;
//     console.log('result:',result)
//     callBack();
// }

// addition(2,2,callBack);
// addition(2,2,function(){
//     console.log('adding complete');
// })

// addition(2,6,()=>{
//     console.log('adding complete');
// })

// const fs = require('fs');
// const os = require('os')

// const user = os.userInfo();
// console.log(user);
// console.log(user.username)

// fs.appendFile('greeting.txt','hello'+user.username+'\n',()=>{
//     console.log('file is created');
// })

const notes = require('./notes');
const _ = require('lodash')
const age = notes.age;
const result = notes.addNumber(age+50,age+50)
console.log(age);
console.log(result);


const data = ["person","person",1,1,2,3,4,1,2,"name",age];
const unique = _.uniq(data);
console.log(unique);


console.log(_.isString('hello'));
// console.log(_.is)
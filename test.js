const assert = require('assert')
const {add,mul} = require('./main');

// if(add(2,3)===5){
//     console.log('add(2,3) === 5,ok')
// }else{
//     console.log('add(2,3) !== 5,error')
// }

assert.equal(add(2,3),5);

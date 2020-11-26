// var a = [
//   {id:100,number:1},
//   {id:101,number:4},
//   {id:102,number:6},
// ];
// var b = [
//   {id:100,number:2},
//   {id:101,number:2},
//   {id:104,number:6},
// ];
// var c = a.concat(b),
//   temp = {},
//   result = [];

// c.map((item,index)=>{
//   if(!temp[item.id]){
//     result.push(item);
//     temp[item.id] = true;
//   }
// })
// console.log(result)

//想要得到的结果是如下:
// result= [
//   {id:100,number:3},
//   {id:101,number:6},
//   {id:102,number:6},
//   {id:104,number:6},
// ]

// var a = [
//   { id: 100, number: 1 },
//   { id: 101, number: 4 },
//   { id: 102, number: 6 },
// ];
// var b = [
//   { id: 100, number: 2 },
//   { id: 101, number: 2 },
//   { id: 104, number: 6 }
// ];

// const target = {};
// const result = []
// var c = a.concat(b);
// c.forEach(c => {
//   if(target[c.id]){
//     target[c.id] += c.number
//     return
//   }
//   target[c.id] = c.number
// })
// console.log(target)

// for (let item in target) {
//   result.push({id:item,number:target[item]})
// }

// let a= [
//   {name:'A'},
//   {name:'B'},
//   {name:'C'}
// ]
// let b=[{name:'A'},{name:'B'},{name:'C'},{name:'D'}]
// a.push(...b)
// //a.filter((v,index)=>{console.log(v,index)})

// function checkDeduplication(v,index){
//   //console.log(v,index)
//   console.log(a.findIndex(y=>{console.log(y)}))
//   //console.log(a.findIndex(y=>y.name===v.name))
// }
// a.filter(checkDeduplication);

// var c = a.filter((v,index)=>(index===a.findIndex(y=>y.name===v.name)))
// console.log(c)


console.log('1');
setTimeout(function () {
	console.log('2');
	process.nextTick(function () {
		console.log('3');
	})
	new Promise(function (resolve) {
		console.log('4');
		resolve();
	}).then(function () {
		console.log('5')
	})
})
process.nextTick(function () {
	console.log('6');
})
new Promise(function (resolve) {
	console.log('7');
	resolve();
}).then(function () {
	console.log('8')
})
setTimeout(function () {
	console.log('9');
	process.nextTick(function () {
		console.log('10');
	})
	new Promise(function (resolve) {
		console.log('11');
		resolve();
	}).then(function () {
		console.log('12')
	})
})
console.log('13');
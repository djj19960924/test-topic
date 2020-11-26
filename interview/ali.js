var arr = [
  { name: '小米1', value: 1, type: 2, date: '2018-06-07T08:00:01.589Z' },
  { name: '锤子T1', value: 1, type: 2, date: '2018-06-07T08:10:01.589Z' },
  { name: '小米2', value: 1, type: 4, date: '2018-06-07T20:00:01.589Z' },
  { name: '小米2', value: 4, type: 4, date: '2018-06-07T20:10:21.189Z' },
  { name: '小米4', value: 1, type: 4, date: '2018-06-07T08:00:01.560Z' },
  { name: '小米4', value: 2, type: 4, date: '2018-06-07T08:10:31.584Z' },
  { name: '小米6', value: 1, type: 3, date: '2018-06-07T08:00:01.589Z' },
  { name: '小米5s', value: 1, type: 4, date: '2018-06-07T08:00:01.589Z' },
  { name: '锤子T2', value: 1, type: 4, date: '2018-06-07T08:00:01.589Z' },
  { name: '锤子T1', value: 4, type: 4, date: '2018-06-07T08:06:01.589Z' },
  { name: '魅蓝note5', value: 1, type: 4, date: '2018-06-07T08:00:01.589Z' },
  { name: '魅蓝note2', value: 5, type: 4, date: '2018-06-02T08:07:01.589Z' },
  { name: '魅蓝note2', value: 6, type: 4, date: '2018-06-07T08:00:01.589Z' },
  { name: '魅蓝note3', value: 1, type: 4, date: '2018-06-05T08:00:01.589Z' },
  { name: '魅蓝note', value: 1, type: 4, date: '2018-06-07T08:00:01.589Z' },
  { name: 'oppor9', value: 7, type: 4, date: '2018-06-04T08:04:01.588Z' },
  { name: '华为p9', value: 1, type: 4, date: '2018-06-02T08:00:01.577Z' },
  { name: '华为p9', value: 2, type: 4, date: '2018-06-07T08:00:01.110Z' },
  { name: '华为p10', value: 1, type: 1, date: '2018-06-07T08:00:01.534Z' }
];

let res = arr.filter((item, index, arr) => {
  item.date = item.date.split('T')[0]
  return item.type === 4
})
const newArr = []
const temp = {}
for (const i in res) {
  //把名称日期合成字符串判断
  const key = `${res[i].name}@${res[i].date}`
  if (temp[key]) {
    temp[key] += res[i].value
  } else {
    temp[key] = res[i].value
  }
}
for (const key in temp) {
  const tempObj = {}
  tempObj.name = key.split('@')[0]
  tempObj.date = key.split('@')[1]
  tempObj.value = temp[key]
  newArr.push(tempObj)
}

function compare(prop) {
  return function (a, b) {
    const value1 = a[prop]
    const value2 = b[prop]
    return value2 - value1
  }
}
newArr.sort(compare('value'))
newArr.forEach((item, index) => {
  const printStr = `${item.name},${item.date.split('-')[0]}年${item.date.split('-')[1]}月${item.date.split('-')[2]}日,售出${item.value}部`
})

let person = [
  {id: 001, name: "小明"},
  {id: 002, name: "小张"},
  {id: 002, name: "小李"},
  {id: 003, name: "小孙"},
  {id: 001, name: "小周"},
  {id: 002, name: "小陈"},   
];
let obj = {}
let peon = person.reduce((cur,next)=>{
  //push返回值是数组长度
  obj[next.id] ? "" : (obj[next.id] = true && cur.push(next))
  console.log(obj)
  return cur
},[])

console.log(peon)
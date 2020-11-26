var xlsx = require('node-xlsx');
var sheets = xlsx.parse('./test.xlsx');
var arr0 = [];
var arr1 = []
var arr = []
var arr2 = []

sheets.forEach(function(sheet){ 
    const data = sheet['data']
    for(let rowId in data){
        const row = data[rowId]
        arr2.push(row)
    }
});　
// console.log(arr2)
// for(let i=0;i<arr2.length;i++){
//     for(let j=0;j<arr2[i].length;j++){
//         // console.log(arr2[i][0])
//         arr2[i][0] = ""
//     }
// }
// console.log(arr2)
arr0.forEach(param1 =>{
    // console.log(param1)
    // arr1.forEach(param2 =>{
    //     arr.push({brand:param1,fandian:param2,city:'首尔'});
    // });
    for(let i=0;i<arr2.length;i++){
        for(let j=0;j<arr2[i].length;j++){
            arr2[i][0] = ""
            arr.push({brand:param1,fandian:arr2[i][j],city:'首尔'})
        }
    }
});

console.log(arr)

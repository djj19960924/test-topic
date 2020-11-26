// var a = 0;
// var list = [4,2,3]
// for(let i=0,fn;fn=list[i++];){
//     console.log(fn)
// }   

// var a = 3

// if(a>1){
//     console.log('1')
// }else if(a>2){
//     console.log('2')
// }else{
//     console.log(3)
// }

// if(a>1){
//     console.log('4')
// }
// if(a>2){
//     console.log('5')
// }

// let arr = [1, 2, 3, 4, 5];
// let arrs = arr.map((value, index, array) => {
//     return value * 2;
// });
// console.log(arrs); //[2, 4, 6, 8, 10]

function isOrderStatus(key) {
    var orderStatus=[
        {value:'支付单未绑定客户',status:101},
        {value:'支付单待支付',status:102},
        {value:'支付单已支付',status:103},
        {value:'出货单未绑定客户',status:201},
        {value:'出货单已发货',status:202},
        {value:'退货单未绑定客户',status:301},
        {value:'退货单待审核',status:302},
        {value:'退货单已退款(退款至余额)',status:303},
    ]
    
    // for(let i=0;i<orderStatus.length;i++){
    //     if(orderStatus[i].status===key){
    //         return orderStatus[i].value
    //     }
    // }
}

// console.log(isOrderStatus(101))

// a = 201;
// if(a ===101||201||301){
//     console.log('111')
// }

var orderStatus = [
    {status:109,value:"支付单已取消",type:"支付单"},
    {status:209,value:"出货单已取消",type:"出货单"},
    {status:301,value:"退款单待审核",type:"退款单"},
    {status:302,value:"退款单已退款",type:"退款单"},
    {status:309,value:"退款单已取消",type:"退款单"},
]

function isOrderStatus(status,name) {
    
    for(let i=0;i<orderStatus.length;i++){
        if( status === orderStatus[i].status){
            console.log('111')
            console.log(orderStatus[i][name])
            return orderStatus[i][name];
        }
    }
}
isOrderStatus(109,'value')

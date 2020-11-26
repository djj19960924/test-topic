function stepOne(msg){
    console.log(msg)
}

function checkStepOne(msg){
    console.log(`check:${msg}`);
    return msg === 'success'? true:false;
}

//第一种
// function flow(msg){
//     if(checkStepOne(msg)){
//         return stepOne(msg);
//     }
//     return false
// }

//第二种
function flow(fn,checkFn,msg){
    if(checkFn(msg)){
        return fn(msg);
    }
    return false;
}
flow(stepOne,checkStepOne,'success');
flow(stepTwo,checkStepTwo,'success');
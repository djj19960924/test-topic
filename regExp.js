// let str = "good good study,day day up!";

// let reg = /\d+/;

// console.log(reg.test(str));

for(var i=1;i<=5;i++){
    (function(j){
        setTimeout(function timer(){
            console.log(j)
        },i*1000)
    })(i)
}

for(let i=1;i<=5;i++){
    setTimeout(function timer(){
        console.log(i)
    },i*1000)
}
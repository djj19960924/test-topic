let state = {
    count : 1
}

let listeners = []

//订阅
function subscribe(listener) {
    listeners.push(listener)
}

function changeCount(count) {
    state.count = count 
    //当count改变的时候,我们要去通知所有的订阅者
    for(let i = 0; i < listeners.length; i++){
        const listener = listeners[i]
        listener()
    }
}

//来订阅一下,当count改变的时候,我要试试输入新的值
subscribe(() => {
    console.log(state.count)
})

//我们来修改state,当然我们不能直接去改state了,我们要通过changeCount来修改
changeCount(2)
changeCount(3)
changeCount(4)
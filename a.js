const HANDLE_TYPE = {
    ADD: 0,
    TAKE_A: 1,
    TAKE_B: 2,
    BYPASS: 3
}
const HANDLE_CONSTRUCT = {
    id: HANDLE_TYPE.BYPASS,
    skuCode: HANDLE_TYPE.BYPASS,
    interiorCode: HANDLE_TYPE.BYPASS,
    name: HANDLE_TYPE.BYPASS,
    specification: HANDLE_TYPE.BYPASS,
    salePrice: HANDLE_TYPE.TAKE_A,
    checked: HANDLE_TYPE.BYPASS,
    number: HANDLE_TYPE.ADD,
    choosePrice: HANDLE_TYPE.TAKE_A

}
var a = [
    {
        id: 3499,
        skuCode: "1",
        interiorCode: "202004033164",
        name: "test100",
        specification: "1",
        salePrice: 6,
        checked: true,
        number: 2,
        choosePrice: 20
    },
    {
        id: 3498,
        skuCode: "1",
        interiorCode: "202004033164",
        name: "test100",
        specification: "1",
        salePrice: 5,
        checked: true,
        number: 3,
        choosePrice: 20
    },
];
var b = [
    {
        id: 3498,
        skuCode: "1",
        interiorCode: "202004033164",
        name: "test100",
        specification: "1",
        salePrice: 5,
        checked: true,
        number: 2,
        choosePrice: 20
    },
    {
        id: 3497,
        skuCode: "1",
        interiorCode: "202004033164",
        name: "test100",
        specification: "1",
        salePrice: 5,
        checked: true,
        number: 3,
        choosePrice: 20
    },
];

const target = {};
const result = []
// var c = a.concat(b);
function arrayToObject(arr) {
    let target = {}
    arr.forEach(arr => {
        target[arr.id] = arr
    })
    return target
}
function handle(itemA,itemB){
    for(let key in itemB){
        switch(HANDLE_CONSTRUCT[key]){
            case HANDLE_TYPE.BYPASS: ;break;
            case HANDLE_TYPE.ADD : itemB[key] += itemA[key];break;
            case HANDLE_TYPE.TAKE_A : itemB[key] = itemA[key];break;
            case HANDLE_TYPE.TAKE_B : ;break;
        }
    }
}
function duplicateRemoval(objectA,objectB){
    for(let key in objectB){
        if(objectA[key]){
            handle(objectA[key],objectB[key])
        }
        objectA[key] = objectB[key]
    }
}

let objectA = arrayToObject(a)
console.log(a)
for(let key in objectA){
    console.log(key)
    console.log(HANDLE_CONSTRUCT[key])
    // switch(HANDLE_CONSTRUCT[key]){
    //     case HANDLE_TYPE.BYPASS: ;break;
    //     case HANDLE_TYPE.ADD : itemB[key] += itemA[key];break;
    //     case HANDLE_TYPE.TAKE_A : itemB[key] = itemA[key];break;
    //     case HANDLE_TYPE.TAKE_B : ;break;
    // }
}

// let objectB = arrayToObject(b)
// duplicateRemoval(objectA,objectB)
// for (let key in objectA) {
//     result.push(objectA[key])
// }
//console.log(result)
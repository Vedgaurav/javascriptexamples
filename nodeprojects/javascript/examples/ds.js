// var color = ["red", "blue", "green"]

// var color = new Array("red", "blue", "green")

// var color = new Array(5)

// var color = ["red", 1, "blue", 2, "green", 3, true]

// console.log(typeof  color[0])
// console.log(typeof(color[1]))

//2. Array.every

let arr = [20, 30, 40, 100, 120]

function lessThanHundredEvery(arr){
    return arr.every(function(element){
        return (element < 100)
    })
}

//console.log(lessThanHundredEvery(arr))

function anyGreaterThanHundred(arr){
    return arr.some(function(element){
        return(element> 100)
    })
}

//console.log(anyGreaterThanHundred(arr))

function filterLessThanHundred(arr){
    return arr.filter(function(element){
        return element < 100 ? true: false;
    })
}

//console.log(filterLessThanHundred(arr))

square = arr.map(function(num){
    return num*num
})

//console.log(square)

function reduceFn(previousValue, currentValue, index, array){
    return previousValue+currentValue;
}

var result = arr.reduce(reduceFn)
//console.log(result)

var arr1 = [1,2,3]
var arr2  = [7,8]

var arr3 = arr1.concat(arr2,9)
//console.log(arr3)

var arr4 = [5,3,7].sort()
//console.log(arr4)

//comparator function
function sortFun(a,b){
    return a - b
}

var arr5 = [56,1,78].sort(sortFun)
//console.log(arr5)

//reverse
arr4.reverse();
//console.log(arr4)

let myMap = new Map()

myMap.set(0, "zero")
myMap.set(1, "one")

// for(let  [key, value] of myMap){
//     console.log(key + " = "+ value)
// }

myMap.forEach(function(value, key){
    console.log(key + " = "+ value)
})

// let clone = new Map(myMap)
// for(let  [key, value] of clone){
//     console.log(key + " = "+ value)
// }

//Arrow function

hello  = (name) =>{
    return "hello world" + " " + name
}

//console.log(hello("gslab"))

hello2 = val => "hello " + " " + val

//console.log(hello2("world"))

//set
let mySet  = new Set();

mySet.add(1)
mySet.add(1)
mySet.add(2)

// for(let item of mySet) console.log(item);

// console.log(mySet.has(1))
// console.log(mySet.delete(2))

// for(let item of mySet) console.log(item)
//'use strict';

let globalVar = "this is globalVar"
//var globalVar = "this is globalVar in global scope"

var c=0;
//let k = 3;

function fun() {

    //1.
    let localVar = "this is local var"
//    console.log(localVar)
//    console.log(globalVar)

    //2.
    // //searches in local scope then in global not found creates a new global variable
    //in non strict mode this will be declared as global variable
    //console.log(withoutLetVar)
    var withoutLetVar = "this is without let will have global scope";
       //.log(globalThis.hasOwnProperty("withoutLetVar"));
      

   //3.
   //redeclared global val in local scope
    //what matters is the scope in which we are accessing it
    let globalVar = "this is globalVar in local scope"
   // console.log(globalVar)
    //for accessing the globalVar here
    console.log(globalThis.hasOwnProperty("globalVar"));
    //3.2
    //console.log(globalThis.globalVar);

    //4.
    // //var hoisting var is declared before any code execution below code treated as := var a; -> a= 2;
    // console.log(a);
    // a = 2;
    // //value is assigned at the time of execution at it's proper posn
    // console.log(a);
    // var a;

    // console.log(a)
    // console.log(globalThis.hasOwnProperty("a"))

    //5.
    //initializing variabe
    // var c = d = 1; //declares c locally and d globally in non strict mode in strict mode reference error
    // console.log(c,d)
    
    // console.log(globalThis.hasOwnProperty("d"))

    //6.
    // let is block scoped while var defines a variable globally or lcoally to an entire function regardless of block
//    {
//      let g = 10;
//       var h = 10;  
//     } 
//    console.log("g = " + g)
//    console.log("h = " + h)

    // //7.  temporal dead zone until it is evaluated
    // console.log(i)
    // console.log(j)

    // var i ;
    // let j;
    // console.log(i)
    // console.log(j)

    //8. syntax error  as k redeclared
    // let k = 1;
    // {
    //     var k = 2;
    // }

    //  console.log(k)

   //9.
   //if else
//    let x = "3";
//    let  y = 3;
//    if(x  == y){
//        console.log("x nd y are equal")
//    }else if( x > y)
//    {
//        console.log("x is greater")
//    }else{
//        console.log("y is greater")
//    }
}
fun();

// console.log(globalVar)
// console.log(localVar)
//console.log(withoutLetVar)
//console.log(globalVar)

//console.log(c,d)
//console.log(k)

function sum(x,y){

    return x+y;
    
}

// sum = sum(2,3)
// console.log(sum)

// function loopFun() {

//1.
    for(let i = 0; i < 10; i++){
        console.log(i)
    }
//2.while

    //let i = 0;
    // while(i<10){
    //     console.log(i)
    //     i++
    // }

//3. do while
    // i = 11;
    // do{
        
    //     console.log(i)
    //     i++
        
    // }while(i<10)

//4.label
// var i, j;

// loop1:
// for (i = 0; i < 3; i++) {      
//    loop2:
//    for (j = 0; j < 3; j++) {   
//       if (i === 1 && j === 1) {
//          //continue loop1;
//          break loop1;
//       }
//       console.log('i = ' + i + ', j = ' + j);
//    }
// }



//5. for of and for in 
// let array = [23,74,65,44]
// array.name = "this is array 1"


// for(let i in array){
//     console.log(array[i])
// }

// for(let i in array){
//     console.log(i)
// }


var array = {
    one: "person1",
    two: "person2",
    three: "person3"
}

for(let i in array){
    console.log(i)
}


// loopFun();

//switch case

// var choice = 1

// switch(choice){

//     case "1":
//         console.log("This is case 1")
//         break;
//     case 1:
//         console.log("This is case 2")
//         break;
//     default:
//         console.log("this  is default")


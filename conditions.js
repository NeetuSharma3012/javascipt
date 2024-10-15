// num = 2904;

// if(num%2 === 0){  

//     console.log("even");

//     t = "smthng";
//     let a = "hello";

//     const pi = 3.14;
//     pi = 2.1;

// }else{

//     console.log("odd");

// }

// console.log(t);
// console.log(a);

//wap if a person is eligible for DL

// let age = 17;

// if ( age >= 18){
//     console.log("eligible");

// }else{
//     console.log(" not eligible");
// }

// grade on basis of marks

let marks = 40;

if(marks >= 90){ 
    console.log("grade A");
}
else if(marks >= 80 && marks < 90){
    console.log("grade B");
}
else if(marks >= 60 && marks < 80){
    console.log("grade C");
}
else if(marks >= 33 && marks < 60){
    console.log("grade D");
}
else{
    console.log("fail!");
}

//perfect square
let num = 49;
const sqrt = Math.sqrt(num);

if(Math.floor(sqrt) === sqrt){
    console.log("true");
}else{
    console.log("false");
}

//divisibility by 7 and 11 both

let n = 77;
if(n%7==0 && n%11==0){
    console.log("given number is divible by both 7 and 11")
}else{
    console.log("given number is not fulfilling required condition ")
}

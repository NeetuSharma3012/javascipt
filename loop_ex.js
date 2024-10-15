//prime number

// let num=35;
// prime = true;

// for(let i = 2; i <= num/2; i++){
//     if(num%i==0){
//         console.log("non prime");
//         prime = false;
//         break;
//     }
// }
// if(prime){
//     console.log("prime");
// }

//num divisible 7 and 11 b/w 100 and 500



// for(let i = 100; i<=500; i++){
//     if(i%7==0 && i%11==0){
//         console.log(i);
        
//     }
// }

//all prfct sqr 1 to 100

for(let i=1; i<=100; i++){
    let s = Math.sqrt(i);
    if(s === Math.floor(s)){
        console.log(i);
    }
}
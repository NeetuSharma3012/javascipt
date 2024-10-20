//parseInt to divide by ten completely

//palindrome

let n=232;
let reverse =0;
let m = n;


while(m>0){
    let r = m%10;
    reverse = reverse * 10 + r;
    m = parseInt(m/10);
}
if(reverse===n){
    console.log("given number is palindrome");
}else{
    console.log("given number isn't palindrome");
}
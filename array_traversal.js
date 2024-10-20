const nums = [1,2,3,4,5,6,7,8];

for(let i=0;i<nums.length;i++){
    console.log(nums[i]);
    
}
console.log("__________________________________________________________");

for(let n of nums){
    console.log(n);
    
}

console.log("__________________________________________________________");

//call back functions

nums.forEach((a,b,c,d)=>{
    console.log(a,b,c,d);
    
    
    
});
console.log("__________________________________________________________");

//square
nums.forEach((a)=>{
    console.log(a**2);
    
});

//storing new elements in new arr

const sq = [];
nums.forEach((a)=>{
    sq.push(a**2);

});

sq.forEach((b)=>{
    console.log(b);
    
});

console.log("__________________________________________________________");

//s=>tore all even numbers in new array

nums.forEach((a)=>{
if(a%2==0){
    console.log(a);
}
});

console.log("____________________________________________________________");

sq.forEach((a)=>{
    if(a%2==0){
        console.log(a);
    }
    });

    console.log("____________________________________________________________");

const prices =[320,200,199,900];
prices.forEach((a)=>{
    console.log(a);
    });
const prices_gst=[];
console.log("prices after gst");


prices.forEach((a)=>{
    prices_gst.push(a+(a*0.18));
    });

    prices_gst.forEach((a)=>{
        console.log(a);
        });

    const greater = [];
    prices_gst.forEach((a)=>{
        console.log(a);
        });
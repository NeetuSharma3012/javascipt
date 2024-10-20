function add(a,b){
    var c = a+b;

    console.log(c);
    
};

add(2,3);

// const getAvg = function(m,n,l){
//     console.log(m,n,l);
    
//     const avg =(m+n+l)/3;
//     return avg;
//     // console.log(avg);
    
// }

// const result = getAvg(1,2);
// console.log(result);

//arrow function

const factorial = (n)=> {
    let f=1;
    for(let i=2;i<=n;i++){
        f = f*i;
    }
    return f;
};

const fact = factorial(5);
console.log(fact);


//prime

const prime = (n)=>{
    p = true;
    for(let i=2;i<=n/2;i++){
        if(n%i==0){
            p=false;
        }
    }
    return p;
};

    pr = prime(35);
    console.log(pr);

    pr = prime(5);
    console.log(pr);

    
    
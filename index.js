//declaring the variable
let x=10, y=20, z=2;
//to declare a function you csn use functin keyword
function add(a,b,c){
    return(a-b*c);
}
function divide(p,q){
    if(p==0){
        throw "an error";
    }
    return(q/p);
}
// to call function(her the function is add)you can use following syntax
let result = add(x,y,z);
let sachin = divide(z,y);
// to log the result into the console window in the web browseruse this
console.log(sachin);
console.log("Hello, Sachin")
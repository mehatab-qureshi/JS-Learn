//undefined
let user;
console.log(user);

//null
let x = null;
console.log(x);

//empty string
let y = "";
console.log(y);

//typeof
console.log(typeof y);
console.log(typeof x);
console.log(typeof user);

//NaN
let sum = "hello" / 2;
console.log(sum);

//falsy values
if(""){
    console.log("Hello")
}

//truty values
if(" "){
    console.log("truthy value")
}

//conversion operator ==
console.log(5 == "5"); //true coz "5" => 5(ie number) so 5==5 true
console.log("" == 0); //0 == 0 true
console.log("" == 1); //0 == 1 false coz ""=> empty value so -> 0

console.log(false == 0);
console.log(false == 9); //coz true=1,false=0 so 0==9 op:false
console.log(false == ""); //coz true=1,false=0 so 0==0(coz str converted to number) op:true
console.log(true == ""); //coz true=1,false=0 so 1==0(coz str converted to number) op:false

console.log(null == undefined); //true

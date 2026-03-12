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
if ("") {
  console.log("Hello");
}

//truty values
if (" ") {
  console.log("truthy value");
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

//type coercion
console.log(typeof Number("5"));
console.log(typeof parseInt("5"));
console.log(typeof String(5));
console.log(typeof (123).toString());

//implicit
console.log("5" + 1);
console.log(5 + "1");

console.log("5" - "1");
console.log("5" - 1);
console.log(5 - "1");

console.log(true + 1); //1 =>coz true=1 so 1 + 1 = 2
console.log(false + 1); //1 =>coz false=0 so 0 + 1 = 1
console.log(false - 1);

console.log(true + "1"); //true1 =>coz boolean bocms str
console.log(false + "1"); //faslse1 =>coz boolean bcoms string

console.log("hello", [] + []);
console.log("hello", [] - []);

console.log("hellooo", [] + {});
console.log("hellooo", [] - {});

console.log("hioii", {} + []);
console.log("hioii", {} - []);

console.log([] == false); //true coz [] -> "" -> 0 so 0==0
console.log([] == []); //Ye type coercion ka case nahi hai.Yaha reference comparison hota hai.Arrays aur objects reference type hote hain.
// Kyuki:
// a → memory address A
// b → memory address B
// Different memory reference → false

let a = [];
let b = a;
console.log(a == b); //true Kyuki dono same memory reference point kar rahe hain.
//Primitive types:value compare hota hai Objects n Arrays:reference compare hota hai

console.log([] == ![]);

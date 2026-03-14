//short circuiting
true && console.log("Hello");
false && console.log("Hello");

console.log(5 && 10);

let isLoggedIn = true;
isLoggedIn && console.log("Login Successful");

//OR
let name = "";
console.log(name || "Guest");

console.log(5 || 10);
console.log(0 || 10);

//Nullish coalescing
let username = null;
console.log(username ?? "Guest");

let value = "";
console.log(value || "Hii");
console.log(value ?? "Hii");

console.log(0 ?? "falsy treat nhi krta!");

//optional chaining
let User = {};
console.log(User?.city?.name);
// console.log(User.city.name);


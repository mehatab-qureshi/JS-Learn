//forEach
let arr = [10, 20, 30];
arr.forEach((n, k, a) => {
  console.log(k, n, a);
});

let num = [2, 4, 6];
num.forEach((sum) => {
  return sum * 2;
});
console.log(num);

//for...of
let name = "Ali";
for (let i of name) {
  console.log(i);
}

for (let i in name) {
  console.log(i); //this will return only index not values
}

let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log(fruit);
}

let number = [10, 20, 30];
for (let [index, sum] of number.entries()) {
  console.log(index, sum * 2);
}

for (let num of [9, 8, 7, 6]) {
  if (num === 7) break;
  console.log(num);
}

//for...in
let users = {
  name: "Ali",
  age: 22,
  city: "Bangalore",
};

for (let user in users) {
  console.log(user, users[user]);
}

//Map function
let score = [1, 2, 3, 4];
let result = score.map((n) => n * 2);
console.log(result);

//filter
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNum = numbers.filter((even) => even % 2 === 0);
console.log(evenNum);

let mapfilterTry = numbers.map((even) => even % 2 === 0);
console.log(mapfilterTry); //it gives boolean value coz it wont eleminate the values of its arr ,it only itereates n return the same arr value

//Reduce
let productPrice = [100, 250, 340, 999, 500];
let totalPrice = productPrice.reduce((previousVal, currVal) => {
  return previousVal + currVal;
}, 0);
console.log(totalPrice);

let nums = [4, 2, 6, 9, 10, 8];
let evennumber = nums.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
}, nums[0]);
console.log(evennumber);

//shorthand
let minele = Math.min(...nums);
console.log(minele);

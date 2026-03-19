//PROMISES
// console.log("Start");
// setTimeout(() => {
//   console.log("Data aa gaya");
// }, 2000);
// console.log("End"); //wht happn here is it does not wait till timer funct executes tht so to overcome this we have promises

let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Kaam done");
  } else {
    reject("Error!");
  }
});

promise
  .then((res) => {
    console.log(res);
    console.log("Next step");
  })
  .catch((err) => {
    console.log(err);
  });

//ASYNC/AWAIT
function wait() {
  return new Promise((resolve, reject) => {
    let error = false;
    setTimeout(() => {
      if (error) {
        reject("Error!");
      } else {
        resolve("Data Fetched");
      }
    }, 2000);
  });
}

async function run() {
  try {
    console.log("Start");

    let data = await wait();
    console.log(data);

    console.log("End");
  } catch (error) {
    console.log(error);
  }
}

run();

//new version of throw
async function wait() {
  let error = true; // true = error aayega, false = data aayega

  if (error) {
    throw "Error aa gaya ❌";
  }

  return "Data Fetched";
}

async function run() {
  try {
    console.log("Start");

    let data = await wait();
    console.log(data);

    console.log("End");
  } catch (error) {
    console.log(error);
  }
}

run();

//real api call version
async function getUsers() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
      throw "API Error ❌";
    }

    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getUsers();

//fetch() me 2 type ke error hote hain: 1) Network error → catch me jayega, 2) API error (404, 500) → catch me nahi jayega

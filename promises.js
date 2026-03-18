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
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Fetched");
    }, 2000);
  });
}

async function run() {
  console.log("Start");

  let data = await wait();
  console.log(data);

  console.log("End");
}

run();
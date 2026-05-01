'use strict';
/* let Age;
const ageRequired = 18;

function allowedMarry(Age) {
  if(Age=>ageRequired) {
    console.log("can get married")
  } else {
    console.log("cannot get married")
  }
};

// calling / running the function
allowedMarry(21); */

// parameters and arguments are different

// parameters is mangos and apples
function fruitJuice(mangos, apples) {
  console.log(mangos, apples);
  const juice = `this juice created with ${mangos} and ${apples}`;
  return juice;
};

// arguments is 2, 4 or parameter's value when functions executed/called
fruitJuice(2, 4);
console.log(fruitJuice(2, 4));
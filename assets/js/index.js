"use strict";

// 1.
const arr = [
  "test",
  false,
  12345,
  undefined,
  "secret",
  NaN,
  true,
  0,
  100,
  null,
];

arr.forEach(function (elem, index) {
  return index % 2 === 0 ? null : console.log(elem);
});

// 2.
const arr2 = ["test", false, 2345, null];
const changedArr2 = arr2.map(function (elem, index) {
  return `Item with index ${index} has value ${elem}`;
});
console.log(changedArr2);

// 3.
const usersInfo = [
  { firstName: "Test", lastName: "Testovich", age: 27, gender: 'male' },
  { firstName: "User", lastName: "Userenko", age: 18, gender: 'male' },
  { firstName: "Test`ya", lastName: "Testovna", age: 16, gender: 'female' },
  { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: 'female' },
  { firstName: "Undefined", lastName: "Undefined", age: 99 },
  { firstName: "Null", lastName: "Nullochyk", gender: 'male' },
];

const fullAgedPeople = usersInfo.filter(function(elem) {
  return elem?.age >= 18;
});

console.log(fullAgedPeople);

// 4.

const firstFullAgeWomen = usersInfo.findIndex(function(elem) {
  return elem.gender === 'female' && elem.age >= 18;
}); 

console.log(firstFullAgeWomen);

// 5.

const fullAgedMans = usersInfo.every(function(elem) {
  return elem.age >= 18 && elem.gender === "male";
});

console.log(fullAgedMans);






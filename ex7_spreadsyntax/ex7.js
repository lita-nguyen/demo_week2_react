const firstArr = [1, 2, 3];
const secondArr = [4, 5, 6];
const thirdArr = [...firstArr, ...secondArr];
const fourArr = [...secondArr, ...firstArr];

let myArr = ["Lita", "Linh"];
myArr = [...myArr, "New item"];

console.log(myArr);

const test1 = {
  name: "Lita",
  address: "Ho Chi Minh",
};

const test2 = {
  name: "Linh",
  address: "Ho Chi Minh",
};

const test = { ...test1, ...test2 };
console.log(test);

const state = {
  name: "Lita",
  age: 21,
  address: "Ho Chi Minh",
};

const result = { ...state, age: 30 };
console.log(result);

function sum(a, b, c) {
  return a + b + c;
}

const number = [1, 2, 3];
console.log(sum(...number));

const myArray = [1, 2, 3];
const myList = myArray.map((item, index) => {
  console.log(item, index);
  return item * 2;
});

const newArray = [];
for (let i = 0; i < myArray.length; i++) {
  let item = myArray[i] * 2;
  newArray.push(item);
}

console.log(myArray, myList, newArray);

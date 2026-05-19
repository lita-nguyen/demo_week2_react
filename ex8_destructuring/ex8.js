const person = { name: "Lita", age: 21, eyeColor: "black" };
const { age, name } = person;

console.log(name);
console.log(age);

const city = ["Ha Noi", "Da Nang", "Sai Gon", "Ca Mau"];
const [x, y, , z] = city;

console.log(x, y, z);

const react = ["React", "Facebook", "all-in-one", "JavaScript"];
const [, , , a] = react;

console.log(a);

const dev = {
  salary: 2000,
  tool: "laptop",
  like: "bugs",
};
const { like } = dev;

console.log(like);

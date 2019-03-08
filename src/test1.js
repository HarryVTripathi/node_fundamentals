const a = `1
2 3
4 5 6`;

const tempArr = a.split("\n");
const [T, NK, ...last] = tempArr;

const b = NK.split(" ")

console.log(b[1]);
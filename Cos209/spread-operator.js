const a = [1, 2, 3];
const b = [0, ...a, 4]; 

const obj1 = { x: 1, y: 2 };
const obj2 = { ...obj1, z: 3, y: 20 };

const arrCopy = [...a];
const objCopy = { ...obj1 };

console.log({ a, b, obj1, obj2, arrCopy, objCopy });
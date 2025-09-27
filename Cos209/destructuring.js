const user = {
  id: 101,
  name: 'Mikel',
  address: {
    city: 'Lagos',
    zip: '100001'
  }
};


const { name, id } = user;
const { address: { city, zip } } = user;

const arr = [10, 20, 30, 40];
const [first, second, ...rest] = arr;

console.log({ name, id, city, zip, first, second, rest });


function greet({ name, address: { city } }) {
  return `Hello ${name} from ${city}`;
}
console.log(greet(user));
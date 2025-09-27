const products = [
  { id: 1, name: 'Headphones', price: 8000 },
  { id: 2, name: 'Charger', price: 2000 },
  { id: 3, name: 'Powerbank', price: 12000 },
];


const names = products.map(p => p.name);

const expensive = products.filter(p => p.price > 5000);


const total = products.reduce((sum, p) => sum + p.price, 0);

const p2 = products.find(p => p.id === 2);

console.log({ names, expensive, total, p2 });
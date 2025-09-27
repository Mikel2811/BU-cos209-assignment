import { formatPrice, applyTax, TAX_RATE } from './utils.js';

const base = 10000;
const taxed = applyTax(base);

console.log('Base:', formatPrice(base));
console.log('Taxed:', formatPrice(taxed));
console.log('Tax rate:', (TAX_RATE * 100) + '%');
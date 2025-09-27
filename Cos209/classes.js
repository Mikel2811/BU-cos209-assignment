class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `${this.name} costs ₦${this.price.toFixed(2)}`;
  }

  applyDiscount(percent) {
    this.price = this.price * (1 - percent / 100);
  }
}

class Gadget extends Product {
  constructor(name, price, brand) {
    super(name, price);
    this.brand = brand;
  }

  getFullInfo() {
    return `${this.brand} ${this.getInfo()}`;
  }
}

// Example usage:
const phone = new Gadget('Phone X', 35000, 'ZuegenTech');
phone.applyDiscount(10);
console.log(phone.getFullInfo()); // ZuegenTech Phone X costs ₦31500.00
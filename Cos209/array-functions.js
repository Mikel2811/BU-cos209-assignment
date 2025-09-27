const nums = [1, 2, 3, 4, 5];

const squares = nums.map(n => n * n);


const add = (a, b = 0) => a + b;

function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
  }, 1000);
}

console.log(squares, add(5, 3));
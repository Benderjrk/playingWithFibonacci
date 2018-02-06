function fibonacci(position) {
  if(position < 3) return 1;
  else return fibonacci(position - 1) + fibonacci(position - 2);

}


console.log(fibonacci(4)); // will give 3

console.log(fibonacci(9)); // will give 34

console.log(fibonacci(12)); // will give 144

console.log(fibonacci(20)); // will give 6765


//Does it blow your mind how it works like mine...

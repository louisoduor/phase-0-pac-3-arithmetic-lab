// Function to add two numbers
function add(a, b) {
    return a + b;
  }
  
  // Function to subtract one number from another
  function subtract(a, b) {
    return a - b;
  }
  
  // Function to multiply two numbers
  function multiply(a, b) {
    return a * b;
  }
  
  // Function to divide one number by another
  function divide(a, b) {
    return a / b;
  }
  
  // Function to increment a number by 1
  function increment(n) {
    return ++n;
  }
  
  // Function to decrement a number by 1
  function decrement(n) {
    return --n;
  }
  
  // Function to parse a string into an integer
  function makeInt(string) {
    return parseInt(string, 10);
  }
  
  // Function to parse a string into a float
  function preserveDecimal(string) {
    return parseFloat(string);
  }
  
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    increment,
    decrement,
    makeInt,
    preserveDecimal
  };
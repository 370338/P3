// p3-module.js

function calculateCoinage(cents) {
    const quarters = Math.floor(cents / 25);
    cents %= 25;
    const dimes = Math.floor(cents / 10);
    cents %= 10;
    const nickels = Math.floor(cents / 5);
    cents %= 5;
    const pennies = cents;
  
    return {
      quarters: quarters,
      dimes: dimes,
      nickels: nickels,
      pennies: pennies,
    };
  }
  
  module.exports = {
    calculateCoinage: calculateCoinage,
  };
  
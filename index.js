const Distance = require('./Distance.js');

const feetValue = 40;
const metersValue = 60;
const milesValue = 4;
const kilometersValue = 7;

console.log(`${feetValue} feet is ${Distance.calculate('feet', feetValue)} meters.`);
console.log(`${metersValue} meters is ${Distance.calculate('meters', metersValue)} feet.`);
console.log(`${milesValue} miles is ${Distance.calculate('miles', milesValue)} kilometers.`);
console.log(`${kilometersValue} kilometers is ${Distance.calculate('kilometers', kilometersValue)} miles.`);

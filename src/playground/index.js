import myLocation, { getGreeting, message , name} from './myModule';
// import myLocation from './myModule';

console.log(message);
console.log(name);
console.log(myLocation);
console.log(getGreeting('Jessica'));

console.log("");

import addition, { sub as subtraction } from './math';

console.log(`Add 1 to 2 = ${addition(1, 2)}.`);
console.log(`Subtract 2 from 3 = ${subtraction(3, 2)}.`);

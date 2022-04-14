// Only change code below this line
let one = new Set([1, 2, 3, 4, 5]);
let two = new Set([6, 4, 3, 2]);
let unionSet = new Set([...one].concat([...two]));
console.log(unionSet);
let intersectionSet = new Set([...one].filter(i=>two.has(i)));
console.log(intersectionSet);
let differenceSet = new Set([...one].filter(i=>two.has(i)===false));
console.log(differenceSet);
// Only change code above this line
module.exports = { unionSet, intersectionSet, differenceSet };

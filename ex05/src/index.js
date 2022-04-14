// Only change code below this line
let shoppingList = new Map([
    ['Banana', 3],
    ['Pineapple', 5],
    ['Pear', 2],
    ['Carrot', 10],
    ['Apple', 1.5]
]);

const arrKey = [];
for (const k of shoppingList.keys()) {
    arrKey.push(k);
}
console.log(arrKey);
for (var i = 0; i < arrKey.length; i++){ 
    console.log(`groceries: ${arrKey[i]}`);
}
 
const arrValue = [];
for (const v of shoppingList.values()) {
    arrValue.push(v);
}
console.log(arrValue);
for (var i = 0; i < arrValue.length; i++){
    console.log(`amount: ${arrValue[i]}`);
}

for (const [key, value] of shoppingList.entries()) {
    console.log([key, value]);
}
// Only change code above this line
//module.exports = { shoppingList, arrKey, arrValue };

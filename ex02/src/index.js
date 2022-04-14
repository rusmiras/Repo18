// Only change code below this line
function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}
//var x = [];
function* insideGenerator1() {
    for (var i = 1; i <=5; i++){
        yield i;
    }

}

function* insideGenerator2() {
    for (let i = 10; i <=15; i++){
        x=yield i;
    }
}
function* insideGenerator3() {
    for (let i = 6; i <= 9; i++){
        x=yield i;
    }
}
const iterator = myGenerator();
const fifteenArray = [];
let str = "";
for (let i = 0; i<=15; i++){
    
    fifteenArray.push(iterator.next().value);
    if (fifteenArray[i] === undefined) {
        str += fifteenArray[i]+"!";
    }
    else {
        str += fifteenArray[i] + "#, ";
    }
}
console.log(str);
// Only change code above this line
module.exports = { fifteenArray, myGenerator };
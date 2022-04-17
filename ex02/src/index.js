// Only change code below this line
function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}
//var x = [];
function* insideGenerator1() {
    for (var i = 1; i <= 5; i++) {
        yield i;
        var x = i;
    }
}


function* insideGenerator2() {
    for (let i = 10; i <= 15; i++) {
        yield i;
        var x = i;
    }
}
function* insideGenerator3() {
    for (let i = 6; i <= 9; i++) {
        yield i;
        var x = i;
    }
}
const iterator = myGenerator();
const fifteenArray = [];
for (let i = 0; i <= 15; i++) {
    fifteenArray.push(iterator.next().value);
    
    if (fifteenArray[i] === undefined) {
        fifteenArray[i] += "!";
    }
    else {
        fifteenArray[i] += "#";
    }
}
console.log(fifteenArray);
// Only change code above this line
module.exports = { fifteenArray, myGenerator };

function addTwoTo(numberIn) {
    if (typeof numberIn === 'number') {
        return +numberIn + 2;
    }
    else {
        return numberIn + "2";
    }
}
var x = '2';
//let x:number | string = 2;
console.log(addTwoTo(x));
var y = undefined;
var y2 = y;
console.log(y2);
//# sourceMappingURL=typeGuards.js.map
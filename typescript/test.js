function addTwoTo(numberIn) {
    if (typeof numberIn === 'number') {
        return numberIn + 2;
    }
    else {
        return numberIn + "2";
    }
}
console.log(addTwoTo(1));
console.log(addTwoTo('1'));
//# sourceMappingURL=test.js.map
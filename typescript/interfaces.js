// implement all interfaces
var ClassWithBooleanCheck = /** @class */ (function () {
    function ClassWithBooleanCheck(result, entity) {
        this.isTrue = function () { return this.result; };
        this.isFalse = function () { return !this.result; };
        this.printSomething = function () {
            console.log("something");
        };
        this.entity = entity || 'anything';
        this.result = result || false;
    }
    return ClassWithBooleanCheck;
}());
;
// test
var checked = new ClassWithBooleanCheck();
console.log(checked.isTrue());
console.log(checked.isFalse());
checked.printSomething();
console.log(checked);
//# sourceMappingURL=interfaces.js.map
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () { console.log('bark'); };
    return Dog;
}());
var fido = new Dog();
console.log(fido);
fido.name = 'Fido';
fido.age = 1;
console.log(fido);
//# sourceMappingURL=Dog.js.map
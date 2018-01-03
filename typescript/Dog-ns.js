var Animal;
(function (Animal) {
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        Dog.prototype.bark = function () { console.log('ns ns ns ns'); };
        return Dog;
    }());
    Animal.Dog = Dog;
})(Animal || (Animal = {}));
var fido = new Animal.Dog();
console.log(fido);
fido.name = 'Fido';
fido.age = 1;
console.log(fido);
fido.bark();
//# sourceMappingURL=Dog-ns.js.map
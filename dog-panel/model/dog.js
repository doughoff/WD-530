"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dog = /** @class */ (function () {
    function Dog(balance, name, age, breed, isMale, lastOfficeVisit, imageUrl) {
        this._balance = balance;
        this._name = name;
        this._age = age;
        this._breed = breed;
        this._isMale = isMale;
        this._lastOfficeVisit = lastOfficeVisit || new Date();
        this._imageUrl = imageUrl || 'http://icons.iconarchive.com/icons/icons8/windows-8/512/Animals-Dog-icon.png';
        console.info('Created', this);
    }
    Object.defineProperty(Dog.prototype, "balance", {
        get: function () { return this._balance; },
        set: function (inBalance) { this._balance = inBalance; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "name", {
        get: function () { return this._name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "age", {
        get: function () { return this._age; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "breed", {
        get: function () { return this._breed; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "isMale", {
        get: function () { return this._isMale; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "lastOfficeVisit", {
        get: function () { return this._lastOfficeVisit; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "imageUrl", {
        get: function () { return this._imageUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "gender", {
        get: function () { return (this._isMale ? 'male' : 'female'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "isSenior", {
        get: function () { return this.age >= 7; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "examType", {
        get: function () {
            var oneMonthInMs = 1000 * 60 * 60 * 24 * 30;
            var elapsedMonths = (new Date().getTime() - this.lastOfficeVisit.getTime()) / oneMonthInMs;
            if (elapsedMonths < 6) {
                return "";
            }
            else if (elapsedMonths < 12) {
                return "checkup";
            }
            else if (elapsedMonths < 24) {
                return "routine";
            }
            else if (elapsedMonths < 36) {
                return "major";
            }
            else
                return "complete";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "oneLine", {
        get: function () {
            return this.name + ", a " + (this.isMale ? 'male' : 'female') + " " + this.breed + ", is " + this.age + " years old.\nLast office visit: " + this.lastOfficeVisit + " \nBalance: $" + this.balance + "\n        ";
        },
        enumerable: true,
        configurable: true
    });
    return Dog;
}());
exports.Dog = Dog;
//# sourceMappingURL=dog.js.map
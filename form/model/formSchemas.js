"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// form schemas
//-----------------------------------------------------------------
var Address = /** @class */ (function () {
    function Address(street, city, state, zip) {
        this._street = street || "";
        this._city = city || "";
        this._state = state || "";
        this._zip = zip || "";
    }
    Address.prototype.reset = function () {
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    };
    Object.defineProperty(Address.prototype, "street", {
        get: function () {
            return this._street;
        },
        set: function (arg) {
            this._street = arg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (arg) {
            this._city = arg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (arg) {
            this._state = arg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "zip", {
        get: function () {
            return this._zip;
        },
        set: function (arg) {
            this._zip = arg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "oneLine", {
        get: function () {
            return this.street + ", " + this.city + ", " + this.state + ' ' + this.zip;
        },
        enumerable: true,
        configurable: true
    });
    return Address;
}());
exports.Address = Address;
//-----------------------------------------------------------------
var Name = /** @class */ (function () {
    function Name(first, last) {
        this._first = first || "John";
        this._last = last || "Smith";
    }
    Name.prototype.reset = function () {
        this.first = '';
        this.last = '';
    };
    Object.defineProperty(Name.prototype, "first", {
        get: function () {
            return this._first;
        },
        set: function (nameIn) {
            this._first = nameIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Name.prototype, "last", {
        get: function () {
            return this._last;
        },
        set: function (nameIn) {
            this._last = nameIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Name.prototype, "oneLine", {
        get: function () {
            return this.first + ' ' + this.last;
        },
        enumerable: true,
        configurable: true
    });
    return Name;
}());
exports.Name = Name;
//-----------------------------------------------------------------
var Phone = /** @class */ (function () {
    function Phone() {
    }
    return Phone;
}());
exports.Phone = Phone;
//# sourceMappingURL=formSchemas.js.map
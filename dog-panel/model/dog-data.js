"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dog_1 = require("./dog");
var MockDogs = /** @class */ (function () {
    function MockDogs() {
    }
    MockDogs.SIX = [
        new dog_1.Dog(245.75, "Bailey", 5, "Labrador", true, new Date(2016, 5, 1)),
        new dog_1.Dog(21.22, "Max", 6, "German Shepherd", true, new Date(2016, 1, 1)),
        new dog_1.Dog(0, "Bella", 7, "Golden Retriever", false, new Date(2012, 2, 1)),
        new dog_1.Dog(0, "Buddy", 8, "Bulldog", true, new Date(2015, 5, 1)),
        new dog_1.Dog(0, "Lucy ", 9, "Beagle", false, new Date(2014, 6, 1)),
        new dog_1.Dog(0, "Molly", 10, "Yorkshire Terrier", false, new Date(2013, 7, 1))
    ];
    return MockDogs;
}());
exports.MockDogs = MockDogs;
//# sourceMappingURL=dog-data.js.map
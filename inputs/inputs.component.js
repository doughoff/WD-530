"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var dog_data_1 = require("./model/dog-data");
//----------------------------------------------  optional child component
var DogName = (function () {
    function DogName() {
    }
    return DogName;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DogName.prototype, "dogNameIn", void 0);
DogName = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dog-name',
        styles: [
            '.dog-nameContainer {margin:.4rem; display: inline-block; text-align: right; }',
            '.dog-breed {font-size: .7rem; }'
        ],
        template: "\n    <div class='dog-nameContainer'>\n        <div class='dog-name'>{{dogNameIn.name | uppercase }}</div>\n        <div class='dog-breed'>{{dogNameIn.breed}}</div>\n    </div>\n"
    }),
    __metadata("design:paramtypes", [])
], DogName);
exports.DogName = DogName;
//----------------------------------------------  optional child component
var DogList = (function () {
    function DogList() {
    }
    return DogList;
}());
__decorate([
    core_1.Input('dogsToChildAgain'),
    __metadata("design:type", Array)
], DogList.prototype, "dogsFromParent", void 0);
DogList = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dog-list',
        templateUrl: 'doglist.component.html'
    }),
    __metadata("design:paramtypes", [])
], DogList);
exports.DogList = DogList;
//----------------------------------------------  optional child component
var InputChild = (function () {
    function InputChild() {
    }
    return InputChild;
}());
__decorate([
    core_1.Input('dogsToChild'),
    __metadata("design:type", Array)
], InputChild.prototype, "dogsFromParent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InputChild.prototype, "childVariableIn", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InputChild.prototype, "childTextIn", void 0);
InputChild = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'input-child',
        templateUrl: 'inputchild.component.html'
    }),
    __metadata("design:paramtypes", [])
], InputChild);
exports.InputChild = InputChild;
//----------------------------------------------  root component
var Inputs = (function () {
    function Inputs() {
        this.aNumber = 123;
        this.dogs = dog_data_1.MockDogs.SIX;
    }
    return Inputs;
}());
Inputs = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-root',
        templateUrl: 'inputs.component.html',
        styleUrls: ['inputs.component.css']
    }),
    __metadata("design:paramtypes", [])
], Inputs);
exports.Inputs = Inputs;
//# sourceMappingURL=inputs.component.js.map
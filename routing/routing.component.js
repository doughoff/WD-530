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
//--------------------------------------------- child component
var A = (function () {
    function A() {
    }
    return A;
}());
A = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'aSelector',
        template: '<p>This is the home page</p>'
    }),
    __metadata("design:paramtypes", [])
], A);
exports.A = A;
//--------------------------------------------- child component
var B = (function () {
    function B() {
    }
    return B;
}());
B = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'bSelector',
        template: '<p>This is my blog.</p>'
    }),
    __metadata("design:paramtypes", [])
], B);
exports.B = B;
//--------------------------------------------- child component
var C = (function () {
    function C() {
    }
    return C;
}());
C = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cSelector',
        template: '<p>Please contact us by tomorrow.</p>'
    }),
    __metadata("design:paramtypes", [])
], C);
exports.C = C;
//--------------------------------------------- root component
var Routing = (function () {
    function Routing() {
    }
    return Routing;
}());
Routing = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-root',
        styleUrls: ['routing.component.css'],
        templateUrl: "routing.component.html"
    }),
    __metadata("design:paramtypes", [])
], Routing);
exports.Routing = Routing;
//# sourceMappingURL=routing.component.js.map
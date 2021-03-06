"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//--------------------------------------------- child component
var A = /** @class */ (function () {
    function A() {
    }
    A = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'aSelector',
            template: '<p>This is the home page</p>'
        })
    ], A);
    return A;
}());
exports.A = A;
//--------------------------------------------- child component
var B = /** @class */ (function () {
    function B() {
    }
    B = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bSelector',
            template: '<p>This is my blog.</p>'
        })
    ], B);
    return B;
}());
exports.B = B;
//--------------------------------------------- child component
var C = /** @class */ (function () {
    function C() {
    }
    C = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cSelector',
            template: '<p>Please contact us by tomorrow.</p>'
        })
    ], C);
    return C;
}());
exports.C = C;
//--------------------------------------------- root component
var Routing = /** @class */ (function () {
    function Routing() {
    }
    Routing = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            styleUrls: ['routing.component.css'],
            templateUrl: "routing.component.html"
        })
    ], Routing);
    return Routing;
}());
exports.Routing = Routing;

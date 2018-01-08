"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//-------------------------------------------  optional child component
var IgnoringChild = /** @class */ (function () {
    function IgnoringChild() {
    }
    IgnoringChild = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ignored-stuff',
            templateUrl: 'ignoring-child.html'
        })
    ], IgnoringChild);
    return IgnoringChild;
}());
exports.IgnoringChild = IgnoringChild;
//-------------------------------------------  optional child component
var OrganizingChild = /** @class */ (function () {
    function OrganizingChild() {
    }
    OrganizingChild = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'unorganized-stuff',
            templateUrl: 'organizing-child.html'
        })
    ], OrganizingChild);
    return OrganizingChild;
}());
exports.OrganizingChild = OrganizingChild;
//-----------------------------------------------  root (app) component
var Children = /** @class */ (function () {
    function Children() {
    }
    Children = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            styleUrls: ['children.component.css'],
            templateUrl: "children.component.html"
        })
    ], Children);
    return Children;
}());
exports.Children = Children;

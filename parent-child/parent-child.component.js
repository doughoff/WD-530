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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//--------------------------------------  reference data class
var Zurb = (function () {
    function Zurb() {
    }
    Zurb.validStylesForCallouts = ['', 'primary', 'secondary', 'success', 'warning', 'alert'];
    Zurb.validSizesForCallouts = ['', 'small', 'large'];
    return Zurb;
}());
exports.Zurb = Zurb;
//--------------------------------------  child component
var ChildComponent = (function () {
    function ChildComponent() {
        this._styleOfCallout = '';
        this._sizeOfCallout = '';
    }
    Object.defineProperty(ChildComponent.prototype, "styleOfCallout", {
        get: function () {
            return this._styleOfCallout;
        },
        set: function (value) {
            if (Zurb.validStylesForCallouts.indexOf(value) >= 0) {
                this._styleOfCallout = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChildComponent.prototype, "sizeOfCallout", {
        get: function () {
            return this._sizeOfCallout;
        },
        set: function (value) {
            if (Zurb.validSizesForCallouts.indexOf(value) >= 0) {
                this._sizeOfCallout = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    ChildComponent.prototype.changeStyle = function () {
        this.styleOfCallout =
            Zurb.validStylesForCallouts[Math.floor(Math.random() *
                Zurb.validStylesForCallouts.length)];
    };
    ChildComponent.prototype.changeSize = function () {
        this.sizeOfCallout =
            Zurb.validSizesForCallouts[Math.floor(Math.random() *
                Zurb.validSizesForCallouts.length)];
    };
    ChildComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'child',
            templateUrl: "child.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], ChildComponent);
    return ChildComponent;
}());
exports.ChildComponent = ChildComponent;
var ParentChildComponent = (function () {
    function ParentChildComponent() {
    }
    ParentChildComponent.prototype.changeStyle = function () {
        console.info('viewChildren object', this.viewChildren);
        var calloutChildren = this.viewChildren;
        calloutChildren.forEach(function (callout) { callout.changeStyle(); });
    };
    ParentChildComponent.prototype.changeSize = function () {
        var calloutChildren = this.viewChildren;
        calloutChildren.forEach(function (callout) { callout.changeSize(); });
    };
    __decorate([
        core_1.ViewChildren(ChildComponent),
        __metadata("design:type", core_1.QueryList)
    ], ParentChildComponent.prototype, "viewChildren", void 0);
    ParentChildComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            styleUrls: ["parent-child.component.css"],
            templateUrl: "parent-child.component.html"
        })
    ], ParentChildComponent);
    return ParentChildComponent;
}());
exports.ParentChildComponent = ParentChildComponent;
//# sourceMappingURL=parent-child.component.js.map
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
var AppComponent = (function () {
    function AppComponent() {
        this._src = 'http://www.funny-animalpictures.com/media/content/items/images/funnydogs0007_O.jpg';
        this._alt = 'funny dogs';
        this.needsBorder = true;
        this.isSuccess = false;
        this.isHidden = false;
        this.isFourColumns = true;
    }
    Object.defineProperty(AppComponent.prototype, "src", {
        get: function () { return this._src; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "alt", {
        get: function () { return this._alt; },
        enumerable: true,
        configurable: true
    });
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-root, .app-root, [app-root]',
        templateUrl: 'app.component.1.html',
        styleUrls: ['app.component.css']
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
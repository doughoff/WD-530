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
var dog_1 = require("./model/dog");
var DogDetail = /** @class */ (function () {
    function DogDetail() {
        this.messageFromDetail = new core_1.EventEmitter();
    }
    Object.defineProperty(DogDetail.prototype, "dog", {
        get: function () { return this._dog; },
        set: function (dogIn) {
            console.info('Updating from', this.dog);
            this._dog = dogIn;
            console.info('Updated to', dogIn);
        },
        enumerable: true,
        configurable: true
    });
    DogDetail.prototype.payBill = function (event) {
        var paidAmount = this.dog.balance;
        console.info('PayBill received event', event);
        this.dog.balance = 0;
        console.info('Paid bill for', this.dog);
        this.messageFromDetail.emit(['Paid bill', this.dog, paidAmount]);
    };
    __decorate([
        core_1.Input('dogIn'),
        __metadata("design:type", dog_1.Dog)
    ], DogDetail.prototype, "_dog", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DogDetail.prototype, "messageFromDetail", void 0);
    DogDetail = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dog-detail',
            templateUrl: './dog-detail.component.html',
            styles: [
                '.c-imagePlacement1 {margin:1em 1em 3em 0; max-height:5em}',
                '.c-imagePlacement2 {margin:.5em .5em 1.5em 0; max-height:2.5em}',
                '.tiny.button { margin:0; padding: .6em 1em;}'
            ]
        })
    ], DogDetail);
    return DogDetail;
}());
exports.DogDetail = DogDetail;
//# sourceMappingURL=dog-detail.component.js.map
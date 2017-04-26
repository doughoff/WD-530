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
var DogPanel = (function () {
    function DogPanel() {
        this.mockDogs = dog_data_1.MockDogs.SIX;
    }
    DogPanel.prototype.onMessageFromDetail = function (event) {
        var message = event[0];
        var dogActedOn = event[1];
        var paidAmount = event[2];
        console.info('Received message', event[0], event[1]);
        this.panelStatus = message + ' of $' + paidAmount + ' for ' + dogActedOn.name;
    };
    return DogPanel;
}());
DogPanel = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-root',
        templateUrl: 'dog-panel.component.3.html',
        styleUrls: ['dog-panel.component.css']
    }),
    __metadata("design:paramtypes", [])
], DogPanel);
exports.DogPanel = DogPanel;
//# sourceMappingURL=dog-panel.component.js.map
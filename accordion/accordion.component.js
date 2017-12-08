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
var accordionData_1 = require("./model/accordionData");
var accordionSection_1 = require("./model/accordionSection");
var Accordion = (function () {
    function Accordion() {
        var _this = this;
        this.sections = [];
        accordionData_1.AccordionData.FOUR.forEach(function (element, index, array) {
            var section = new accordionSection_1.AccordionSection(element.label, element.content);
            _this.sections.push(section);
        });
        console.info('constructor()');
    }
    Accordion_1 = Accordion;
    Accordion.prototype.ngOnInit = function () {
        //console.table(this.sections);
    };
    Accordion.prototype.accordionClick = function (event) {
        console.log('Clicked accordion element', event.srcElement.id, event);
        this.sections.forEach(function (section) { section.hidden = true; }); // close all
        var clickedContent = this.sections[+event.srcElement.id];
        clickedContent.hidden = !clickedContent.isHidden;
        event.preventDefault();
    };
    Accordion.prototype.showEventInConsole = function (event) {
        console.info(event);
        event.preventDefault();
    };
    Accordion.prototype.reverseSections = function () {
        this.sections.reverse();
    };
    Accordion.shuffleArray = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };
    Accordion.prototype.shuffleSections = function () {
        Accordion_1.shuffleArray(this.sections);
    };
    Accordion.prototype.deleteLastSection = function () {
        this.sections.pop();
    };
    Accordion = Accordion_1 = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            styleUrls: ['accordion.component.css'],
            templateUrl: 'accordion.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], Accordion);
    return Accordion;
    var Accordion_1;
}());
exports.Accordion = Accordion;
//# sourceMappingURL=accordion.component.js.map
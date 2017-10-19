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
var forms_1 = require("@angular/forms");
var ValidateCity = /** @class */ (function () {
    function ValidateCity(_city, _state) {
        this.city = _city;
        this.state = _state;
    }
    ValidateCity.startsWith = function (aLetter) {
        var _this = this;
        var errors = {};
        var key = 'start with ' + aLetter;
        errors[key] = true;
        return function (theControl) {
            // console.log('control for startsWith', theControl);
            if (!_this['addressCity'].value.startsWith(aLetter)) {
                return errors;
            }
            return null;
        };
    };
    ValidateCity.notWichita_notStartWithK_min3 = function (control) {
        var errors = {};
        if (!control.value) {
            errors['no city'] = true;
        }
        if (control.value.match(/Wichita/)) {
            errors["I don't like Wichita"] = true;
        }
        if (control.value.match(/K.*/i)) {
            errors["Don't start with a K"] = true;
        }
        if (control.value.length < 3) {
            errors["I need more letters"] = true;
        }
        for (var anyError in errors) {
            if (errors.hasOwnProperty(anyError)) {
                return errors;
            }
        }
        return null;
    };
    return ValidateCity;
}());
exports.ValidateCity = ValidateCity;
var Utilities = /** @class */ (function () {
    function Utilities() {
    }
    Utilities.getErrorString = function (errors) {
        var separator = '';
        var errorString = '';
        for (var key in errors) {
            if (errors[key]) {
                // only use error message when true
                errorString += separator + key;
                separator = ', ';
            }
        }
        return errorString;
    };
    return Utilities;
}());
exports.Utilities = Utilities;
var GrumpyCityValidator = /** @class */ (function () {
    function GrumpyCityValidator() {
    }
    GrumpyCityValidator = __decorate([
        core_1.Directive({
            selector: '[grumpy-city]',
            providers: [
                {
                    provide: forms_1.NG_VALIDATORS,
                    useValue: ValidateCity.notWichita_notStartWithK_min3,
                    multi: true
                }
            ]
        })
    ], GrumpyCityValidator);
    return GrumpyCityValidator;
}());
exports.GrumpyCityValidator = GrumpyCityValidator;
var CityStartsWithValidator = /** @class */ (function () {
    function CityStartsWithValidator(aLetter) {
        this.validator = ValidateCity.startsWith(aLetter);
    }
    CityStartsWithValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    CityStartsWithValidator = __decorate([
        core_1.Directive({
            selector: '[city-starts-with]',
            providers: [
                {
                    provide: forms_1.NG_VALIDATORS,
                    useValue: ValidateCity.startsWith,
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [String])
    ], CityStartsWithValidator);
    return CityStartsWithValidator;
}());
exports.CityStartsWithValidator = CityStartsWithValidator;
//# sourceMappingURL=form.validator.js.map
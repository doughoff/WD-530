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
var formSchemas_1 = require("./model/formSchemas");
var states_1 = require("./model/states");
var form_validator_1 = require("./form.validator");
var NameAddressForm = /** @class */ (function () {
    function NameAddressForm(builder) {
        this.states = states_1.States.withAbbreviations;
        this.builder = builder;
        this._name = new formSchemas_1.Name();
        this._address = new formSchemas_1.Address();
        this.buildFormGroup();
        this.setErrorMessages();
        this.updateValidState();
    }
    Object.defineProperty(NameAddressForm.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (arg) {
            this._name = arg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NameAddressForm.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (arg) {
            this._address = arg;
        },
        enumerable: true,
        configurable: true
    });
    NameAddressForm.prototype.submittingForm1 = function (data) {
        console.log('Data 1 was submitted.');
        this.submittedDataText = data.nameFirst + ' ' + data.nameLast;
    };
    NameAddressForm.prototype.showEachPropertyOf = function (data) {
        for (var eachKey in data) {
            console.info(eachKey, '=', data[eachKey]);
        }
    };
    NameAddressForm.prototype.showStringified = function (data) {
        console.info('Stringified data:', JSON.stringify(data, null, 2));
    };
    NameAddressForm.prototype.submittingForm2 = function (data) {
        console.info('Form 2 was submitted.');
        console.log('Submitted data', data);
        console.info('Model is now: ', this.name, this.address);
        // this.name.reset();
        // this.address.reset();
        data.forEach(function (field) { field.value = ''; });
    };
    NameAddressForm.prototype.submittingForm3 = function (formData) {
        console.info('Form 3 was submitted.');
        console.info('Model is now: ', this.name, this.address);
        console.info('ngControl form data:', JSON.stringify(formData.value));
    };
    NameAddressForm.prototype.submittingForm4 = function (formData) {
        console.info('Form 4 was submitted.');
        console.info('form data:', JSON.stringify(formData.value));
        console.info('nameAddressFormGroup data:', JSON.stringify(this.nameAddressFormGroup.value));
        console.info(formData);
        var keysAndValues = '';
        for (var key in formData.controls) {
            keysAndValues += key + ' = ' + formData.controls[key].value + '\n';
        }
        console.info(keysAndValues);
    };
    NameAddressForm.prototype.buildFormGroup = function () {
        this.nameAddressFormGroup = this.builder.group({
            'nameFirst': [this.name.first, forms_1.Validators.required],
            'nameLast': [this.name.last, [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            'addressStreet': [this.address.street, forms_1.Validators.required],
            'addressCity': [this.address.city],
            'addressState': [this.address.state, forms_1.Validators.maxLength(2)],
            'addressZip': [this.address.zip, [forms_1.Validators.required, forms_1.Validators.pattern('[0-9]{5}(-[0-9]{4})?')]]
        });
        var city = this.nameAddressFormGroup.controls['addressCity'];
        var state = this.nameAddressFormGroup.controls['addressState'];
        var validateThatCity = new form_validator_1.ValidateCity(city, state);
        this.nameAddressFormGroup.controls['addressCity'].validator = form_validator_1.ValidateCity.notWichita_notStartWithK_min3;
        //this.nameAddressFormGroup.controls['addressCity'].validator = validateThatCity.startsWith('K');
    };
    NameAddressForm.prototype.showGroupDataInOneLine = function (formData) {
        return formData.controls['nameFirst'].value + ' ' +
            formData.controls['nameLast'].value + ', ' +
            formData.controls['addressStreet'].value + ', ' +
            formData.controls['addressCity'].value + ', ' +
            formData.controls['addressState'].value + ' ' +
            formData.controls['addressZip'].value;
    };
    NameAddressForm.prototype.updateValidState = function () {
        var groupControls = this.nameAddressFormGroup.controls;
        this.whenValidStateFor = {
            nameFirst: groupControls['nameFirst'].valid || groupControls['nameFirst'].pristine,
            nameLast: groupControls['nameLast'].valid || groupControls['nameLast'].pristine,
            addressStreet: groupControls['addressStreet'].valid || groupControls['addressStreet'].pristine,
            addressCity: groupControls['addressCity'].valid || groupControls['addressCity'].pristine,
            addressState: groupControls['addressState'].valid || groupControls['addressState'].pristine,
            addressZip: groupControls['addressZip'].valid || groupControls['addressZip'].pristine
        };
        this.setErrorMessages();
    };
    NameAddressForm.prototype.setErrorMessages = function () {
        this.errorMessages = {
            nameFirst: 'required',
            nameLast: 'Use at least 3 characters',
            addressStreet: 'required',
            addressCity: form_validator_1.Utilities.getErrorString(this.nameAddressFormGroup.controls['addressCity'].errors),
            addressState: 'x2',
            addressZip: '5 or 5-4 digits'
        };
    };
    NameAddressForm.prototype.showForm = function (form, event) {
        console.info(form, event);
        event.preventDefault();
        this.updateValidState();
        console.info(this.whenValidStateFor);
    };
    NameAddressForm.prototype.ngOnInit = function () {
        var _this = this;
        this.nameAddressFormGroup.valueChanges.subscribe(function (value) {
            _this.updateValidState();
        });
    };
    NameAddressForm = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'name-address-form',
            styleUrls: ['name-address.component.css'],
            templateUrl: 'name-address.component.0.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], NameAddressForm);
    return NameAddressForm;
}());
exports.NameAddressForm = NameAddressForm;
//# sourceMappingURL=name-address.component.js.map
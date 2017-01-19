import { FormControl, AbstractControl} from '@angular/forms';
import {Directive} from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';

interface ValidationResult {
    [key: string]: any;
}

export class ValidateCity {
    private city: AbstractControl;
    private state: AbstractControl;
    constructor(_city?: AbstractControl, _state?: AbstractControl) {
        this.city = _city;
        this.state = _state;
    }

    public static startsWith(aLetter: string) {
        let errors = {};
        let key = 'start with ' + aLetter;
        errors[key] = true;
        return (theControl: AbstractControl): { [key: string]: any } => {
            // console.log('control for startsWith', theControl);
            if (!this['addressCity'].value.startsWith(aLetter)) { return errors; }
            return null;
        };
    }

    public static notWichita_notStartWithK_min3(control: FormControl): ValidationResult {
        let errors: ValidationResult = {};
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
    }
}
export class Utilities {
    public static getErrorString(errors: ValidationResult): String {
        var separator = '';
        var errorString = '';
        for (let key in errors) {
            if (errors[key]) {
                // only use error message when true
                errorString += separator + key;
                separator = ', ';
            }
        }
        return errorString;
    }
}

@Directive({
    selector: '[grumpy-city]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useValue: ValidateCity.notWichita_notStartWithK_min3,
            multi: true
        }]
})
export class GrumpyCityValidator { }


@Directive({
    selector: '[city-starts-with]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useValue: ValidateCity.startsWith,
            multi: true
        }]
})
export class CityStartsWithValidator {
    validator: Function;

    constructor(aLetter: string) {
        this.validator = ValidateCity.startsWith(aLetter);
    }

    validate(c: FormControl) {
        return this.validator(c);
    }
}
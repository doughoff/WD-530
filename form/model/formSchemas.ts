// form schemas
//-----------------------------------------------------------------
export class Address {
    private _street: string;
    private _city: string;
    private _state: string;
    private _zip: string;
    constructor(
        street?: string, 
        city?: string, 
        state?: string, 
        zip?: string ){
        this._street = street || "";
        this._city = city || "";
        this._state = state || "";
        this._zip = zip || "";
    }
    reset() : void {
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
    get street() {
        return this._street;
    }
    set street(arg: string) {
        this._street = arg;
    }
    get city() {
        return this._city;
    }
    set city(arg: string) {
        this._city = arg;
    }
    get state() {
        return this._state;
    }
    set state(arg: string) {
        this._state = arg;
    }
    get zip() {
        return this._zip;
    }
    set zip(arg: string) {
        this._zip = arg;
    }
    get oneLine() {
        return this.street + ", " + this.city + ", " + this.state + ' ' + this.zip;
    }
}
//-----------------------------------------------------------------
export class Name {
    private _first: string;
    private _last: string;
    constructor(first?: string, last?: string) {
        this._first = first || "John";
        this._last = last || "Smith";
    }
    reset() : void {
        this.first = '';
        this.last = '';
    }
    get first() {
        return this._first;
    }
    set first(nameIn: string) {
        this._first = nameIn;
    }
    get last() {
        return this._last;
    }
    set last(nameIn: string) {
        this._last = nameIn;
    }
    get oneLine() {
        return this.first + ' ' + this.last;
    }
}
//-----------------------------------------------------------------
export class Phone { 
  
}
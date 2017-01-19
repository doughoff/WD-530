export class Dog {
    private _balance: number;
    private _name: string;
    private _age: number;
    private _breed: string;
    private _isMale: boolean;
    private _lastOfficeVisit: Date;
    private _imageUrl: string;

    constructor(balance: number, name: string, age: number, breed: string,
        isMale: boolean, lastOfficeVisit?: Date, imageUrl?: string) {
        this._balance = balance;
        this._name = name;
        this._age = age;
        this._breed = breed;
        this._isMale = isMale;
        this._lastOfficeVisit = lastOfficeVisit || new Date();
        this._imageUrl = imageUrl || 'http://icons.iconarchive.com/icons/icons8/windows-8/512/Animals-Dog-icon.png';
        console.info('Created', this);
    }

    get balance(): number { return this._balance; }
    set balance(inBalance: number) { this._balance = inBalance; }
    get name(): string { return this._name; }
    get age(): number { return this._age; }
    get breed(): string { return this._breed; }
    get isMale(): boolean { return this._isMale; }
    get lastOfficeVisit(): Date { return this._lastOfficeVisit; }
    get imageUrl(): string { return this._imageUrl; }

    get gender(): string { return (this._isMale ? 'male' : 'female'); }
    get isSenior(): boolean { return this.age >= 7; }
    get examType(): string {
        let oneMonthInMs: number = 1000 * 60 * 60 * 24 * 30;
        let elapsedMonths: number = (new Date().getTime() - this.lastOfficeVisit.getTime()) / oneMonthInMs;
        if (elapsedMonths < 6) { return ""; }
        else if (elapsedMonths < 12) { return "checkup"; }
        else if (elapsedMonths < 24) { return "routine"; }
        else if (elapsedMonths < 36) { return "major"; }
        else return "complete";
    }
    
    get oneLine(): string {
        return `${this.name}, a ${this.isMale ? 'male' : 'female'} ${this.breed}, is ${this.age} years old.
Last office visit: ${this.lastOfficeVisit} 
Balance: $${this.balance}
        `;
    }
}
// class interface
interface HasBooleanCheck {
    result: boolean;
    isTrue(): boolean;
    isFalse(): boolean;
}

// function interfaces
interface f_returnVoidNoInputs {
    (): void
}
interface f_boolNoInputs {
    (): boolean;
}

// implement all interfaces
class ClassWithBooleanCheck implements HasBooleanCheck { 
    entity: any;
    result: boolean;
    isTrue: f_boolNoInputs = function() {return this.result;};
    isFalse: f_boolNoInputs = function() {return !this.result;}
    printSomething: f_returnVoidNoInputs = function() {
        console.log("something");
    }
    constructor(result?: boolean, entity?: any){
        this.entity = entity || 'anything';
        this.result = result || false;
    }
};

// test
let checked = new ClassWithBooleanCheck();
console.log(checked.isTrue());
console.log(checked.isFalse());
checked.printSomething();
console.log(checked);

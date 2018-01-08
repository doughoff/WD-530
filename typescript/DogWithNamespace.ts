namespace Animal {
    export class Dog {
        name: string;
        age: number;
        bark(): void { console.log('bark bark bark!'); }
    }
let fido: Animal.Dog = new Animal.Dog();
console.log(fido);
fido.name = 'Fido';
fido.age = 1;
console.log(fido);
fido.bark();
}

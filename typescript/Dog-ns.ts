namespace Animal {
    export class Dog {
        name: string;
        age: number;
        bark(): void { console.log('ns ns ns ns'); }
    }
}
var fido: Animal.Dog = new Animal.Dog();
console.log(fido);
fido.name = 'Fido';
fido.age = 1;
console.log(fido);
fido.bark();

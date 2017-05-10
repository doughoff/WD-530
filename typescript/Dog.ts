class Dog {
    name: string;
    age: number;
    bark (): void { console.log('bark'); }
}
var fido: Dog = new Dog();
console.log(fido);
fido.name = 'Fido';
fido.age = 1;
console.log(fido);

//--------------------------------------------- arrays
console.log('------------------------------------------------- Arrays');
var cars = [
    'Audi', 'BMW', 'Chevy'
];

// array syntax
cars['dealership'] = 'Hoff Auto Arrays';

// object syntax
cars.dealership = 'Hoff Auto Arrays';
console.log('-------------------------------------------- for');

for (var i = 0; i < cars.length; i++) {
    console.log(cars[i], '@', cars.dealership);
}
console.log('-------------------------------------------- for-in');
for (key in cars) {
    console.log(key, '=', cars[key]);
}

console.log('-------------------------------------------------- Objects');
//-------------------------------------------- objects
var carsObject = {
    0: 'Audi',
    1: 'BMW',
    2: 'Chevy',
    dealership: 'Hoff Auto Objects'
};
console.log('-------------------------------------------- for');
for (var i = 0; i < carsObject.length; i++) {  // needs length property to work
    console.log(carsObject[i], '@', carsObject.dealership);
}
console.log('-------------------------------------------- for-in');
for (key in carsObject) {
    console.log(key, '=', carsObject[key]);
}
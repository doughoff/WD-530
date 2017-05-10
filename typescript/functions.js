// function declaration with name
function getOne() { return 1; }
// function declaration assigned to variable
var getADigit = function getOne() { return 1; };
// anonymous function declaration assigned to variable
var getAOne = function () { return 1; };
// arrow function declaration assigned to variable
var getOneDigit = function () { return 1; };
console.log('--------------------------------------- getOne');
console.log(getOne());
console.log('--------------------------------------- getADigit');
console.log(getADigit());
console.log(getOne());
console.log('--------------------------------------- getAOne');
console.log(getAOne());
console.log('--------------------------------------- getOneDigit');
console.log(getOneDigit());
// compare js files when outputting to es5 and es6 in tsconfig.json
//# sourceMappingURL=functions.js.map
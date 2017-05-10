// function declaration with name
function getOne( ) : number { return 1; }
// function declaration assigned to variable
let getADigit   = function getOne( ) : number { return 1; }
// anonymous function declaration assigned to variable
let getAOne     = function       ( ) : number { return 1; }
// arrow function declaration assigned to variable
let getOneDigit =                ( ) : number  =>  { return 1; }; 

console.log('--------------------------------------- getOne')
console.log(getOne());
console.log('--------------------------------------- getADigit')
console.log(getADigit());
console.log(getOne());
console.log('--------------------------------------- getAOne')
console.log(getAOne());
console.log('--------------------------------------- getOneDigit')
console.log(getOneDigit());

// compare js files when outputting to es5 and es6 in tsconfig.json

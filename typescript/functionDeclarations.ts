// function declaration with name
function getOne( ) : number { return 1; }
// function declaration assigned to variable
let get1   =      function getOne( ) : number { return 1; }
// anonymous function declaration assigned to variable
let getAOne     = function       ( ) : number { return 1; }
// arrow function declaration assigned to variable
let getOneDigit =                ( ) : number  =>  { return 1; }; 
// arrow function declaration assigned to variable
let get1Digit =                  ( ) : number  =>   1; 

console.log('--------------------------------------- getOne')
console.log(getOne());
console.log('--------------------------------------- get1')
console.log(get1());
console.log('--------------------------------------- getAOne')
console.log(getAOne());
console.log('--------------------------------------- getOneDigit')
console.log(getOneDigit());
console.log('--------------------------------------- get1Digit')
console.log(get1Digit());

// compare js files when outputting to es5 and es6 in tsconfig.json

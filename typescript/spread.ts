let order1 = {
	entree: `hamburger`,
	drink: `Pepsi`,
	sideOrder: `fries`
};
let update = {sideOrder: `onion rings`};
let order2 = {...order1, ...update};
console.log(order2);
let order3 = Object.assign({}, order1, update);
console.log(order3);
console.log('==', order2 == order3);
console.log('===', order2 === order3);
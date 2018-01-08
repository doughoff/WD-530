interface Order{
    entree: string,
    drink?:  string,
    sideOrder? : string,
    total: number
}

function putOrderIn(anOrder: Order){
    console.log(anOrder);
}

putOrderIn({entree:'hamburger', total:4.95});
putOrderIn({entree:'cheeseburger', drink: 'Pepsi', total:6.95});
putOrderIn({entree:'cheeseburger', sideOrder: 'fries', drink: 'Pepsi', total:8.95});
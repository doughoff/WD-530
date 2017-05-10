class MarshallsGift {
	static storeName: string = "Marshall's";
	giftName : string;
    price: number;
    constructor(gift: string, price?: number){
        this.giftName = gift;
        this.price = price || 0;
    }
}

// non-object JS syntax
var gifts: string[] = ['umbrella', 'Italian oil', 'notebook', 'pair of pants'];
// gifts.storeName = 'Marshall\'s'; // kinda static variable for JS

// object syntax
var umbrella = new MarshallsGift('umbrella');
var oil = new MarshallsGift('Italian oil');
var notebook = new MarshallsGift('notebook');
var pants = new MarshallsGift('pair of pants', 17.99);
console.log(umbrella, oil, notebook, pants, MarshallsGift.storeName);
console.log(umbrella.price);
var MarshallsGift = (function () {
    function MarshallsGift(gift, price) {
        this.giftName = gift;
        this.price = price || 0;
    }
    MarshallsGift.storeName = "Marshall's";
    return MarshallsGift;
}());
// non-object JS syntax
var gifts = ['umbrella', 'Italian oil', 'notebook', 'pair of pants'];
// gifts.storeName = 'Marshall\'s'; // kinda static variable for JS
// object syntax
var umbrella = new MarshallsGift('umbrella');
var oil = new MarshallsGift('Italian oil');
var notebook = new MarshallsGift('notebook');
var pants = new MarshallsGift('pair of pants', 17.99);
console.log(umbrella, oil, notebook, pants, MarshallsGift.storeName);
console.log(umbrella.price);
//# sourceMappingURL=static.js.map
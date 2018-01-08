class ShoppingList {
    private groceries: string[];
    constructor (){
        this.groceries = [];
    }
    addItem(item): void {
        this.groceries = this.groceries.concat([item]);
        console.info('Added:', item);
    }
    removeItem(item): void {
        this.groceries = this.groceries.filter((filteredItem)=>{
            let itemsMatch:boolean = (item !== filteredItem);
            if (itemsMatch) {console.info('Removed:', item);}
            return itemsMatch;
            }
        );
    }
}
let mylist = new ShoppingList();
mylist.addItem('banana');
mylist.addItem('apple');
mylist.removeItem('banana');

for (const key in mylist) {
    const element = mylist[key];
    if (mylist.hasOwnProperty(key)) {
        console.log('ShoppingList:',key, '=',element);
    }
}

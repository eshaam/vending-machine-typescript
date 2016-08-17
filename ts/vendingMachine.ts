/// <reference path="./coin.ts" />
/// <reference path="./product.ts" />


class Cell {
    constructor(public product: CocaCola) {

    }
    stock = ko.observable(3)
    sold = ko.observable(false)
}

class VendingMachine {
    //people will put coins into a machine so we will have to keep track of a total
    //Its private because we will only use it internally
    private paid = ko.observable(0)
    acceptedCoins: Quarter[] = [new Quarter]
    acceptCoin = (coin: Quarter): void => {
        let oldTotal = this.paid()
        this.paid(oldTotal + coin.Value)
    }
}
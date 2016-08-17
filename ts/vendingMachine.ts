/// <reference path="coin.ts" />

class VendingMachine {
    //people will put coins into a machine so we will have to keep track of a total
    //Its private because we will only use it internally
    private paid = 0
    acceptCoin = (coin: Quarter): void => {
        this.paid = this.paid + coin.Value
    }
}
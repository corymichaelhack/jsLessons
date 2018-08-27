var Apples = /** @class */ (function () {
    function Apples() {
        this.name = 'Apples';
        this.price = 5.50;
    }
    Apples.prototype.setTimeOfPurchase = function (d) {
        console.log("Apples purchased on " + d);
    };
    return Apples;
}());
var themApples = new Apples();
themApples.setTimeOfPurchase(new Date(Date.now()));
//# sourceMappingURL=5-interfaces.js.map
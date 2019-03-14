module.exports = function makeExchange(currency) {
    var moneyArrayMinMax= {};
        if (currency <= 0){
            return moneyArrayMinMax;
        } else if (currency > 10000 ){
            return moneyArrayMinMax = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        }

        var moneys = [ { key: "H", number: 50}, { key: "Q", number: 25}, { key: "D", number: 10}, { key: "N", number: 5}, { key: "P", number: 1}];

        moneys.forEach(function(element) {
            var param = Math.floor(currency / element.number);
            if (param > 0) {
                moneyArrayMinMax[element.key] = param;
            }
            currency -= param * element.number;
        });

        return moneyArrayMinMax;
 }

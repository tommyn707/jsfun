
var denominations = [1, 2, 3];
var amount = 4;
function waysToReturnMemoize(amount, denominations){
    var waysOfDoingNcents = [];
    for (var i = 0; i <= amount; i++) {
        waysOfDoingNcents[i] = 0;
    }
    waysOfDoingNcents[0] = 1;

    for (var j = 0; j < denominations.length; j++) {
        var coin = denominations[j];
        
       
        for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
            var higherAmountRemainder = higherAmount - coin;

            waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
        }
    }

    return waysOfDoingNcents[amount];
}
console.log(waysToReturnChange(denominations, denominations.length - 1, amount));
console.log(waysToReturnMemoize(amount,denominations))
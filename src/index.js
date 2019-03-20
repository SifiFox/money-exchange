// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency > 10000) { 
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
}

    if(currency <= 0) {
        return {};
    }

        let amountH = 0;
        let amountQ = 0;
        let amountD = 0;
        let amountN = 0;
        let amountP = 0;

        while(currency >= 50)
        {
            currency -= 50;
            amountH++ ;
        }

        while(currency >= 25)
        {
            currency -= 25;
            amountQ++ ;
        }

        while(currency >= 10)
        {
            currency -= 10;
            amountD++ ;
        }
        while(currency >= 5)
        {
            currency -= 5;
            amountN++ ;
        }
        while(currency >= 1)
        {
            currency -= 1;
            amountP++ ;
        }
        let obj = {};
        
        if(amountH) obj.H = amountH;
        if(amountQ) obj.Q = amountQ;
        if(amountD) obj.D = amountD;
        if(amountN) obj.N = amountN;
        if(amountP) obj.P = amountP; 
        
        return obj;
    }


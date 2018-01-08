type CurrencyCode = "USD" | "EUR" | "GBP" | "AUD";
function convertToUSD(amount:number, code: CurrencyCode = 'USD') {
    let exchangeRate = 1.0;
        if (code === "EUR") {
            exchangeRate = 1.20673;
        }
        else if (code === "GBP") {
            exchangeRate = 1.35527;
        }
        else if (code === "AUD") {
            exchangeRate = 0.78609;
        }
        return amount/exchangeRate + ' ' + code;
    }
    console.log(convertToUSD(100));
    console.log(convertToUSD(100,'EUR'));
function convertCurrency(money)  {
let moneyNumbers;
let tempMoney = money.toLowerCase();
const onlySymbols = tempMoney.replace(/[0-9]/g, '')
         if (onlySymbols === '$') {
            moneyNumbers = parseInt(tempMoney) * 35;
            console.log('Це долар ' + moneyNumbers);
            return 'Це долар ' + moneyNumbers;
        } 
        if (onlySymbols === 'uah') {
            moneyNumbers = parseInt(tempMoney) / 35;
            return 'Це гривня ' + moneyNumbers;
        }
        else
        return 'Невідома валюта';
    }
   console.log(convertCurrency('200uAh'))
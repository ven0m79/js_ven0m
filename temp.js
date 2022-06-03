/*function convertCurrency(money)  {
    let temp = 0;
    let Currency;
    for (i = 0; i < money.length; i++){
        if (money[i] != '$') {
            temp = temp + money[i];
            console.log(money[i], temp)
        } else if (money[i] != uah) {

        }
        Currency = temp * 28.45
    }
    console.log(Currency);
return Currency
}
convertCurrency("200$")
*/

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

let getPairs = function() {
    let hloptsi = [];
    let zhinky = [];
        const allPairs = [];
        
    for (let i of students){
        if (i.endsWith('а')) {
            zhinky.push(i);
            } else
            hloptsi.push(i);
       }
       for (i = 0; i < hloptsi.length; i++) {
        allPairs.push([hloptsi[i], zhinky[i]])
        
       }
    return  allPairs;
    }
    console.log(getPairs());
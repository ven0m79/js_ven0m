const kodein = 15.678;
const morphin = 123.965;
const met = 90.2345;

const max = Math.max(kodein, morphin, met);
const min = Math.min(kodein, morphin, met);
const summ = (kodein + morphin + met);
let summLow = Math.floor(kodein) + Math.floor(morphin) + Math.floor(met);
let summHundred = Math.round(summLow/100)*100;
let keepChange = 500 - summ;

console.log('Решту з 500 отримає ' + keepChange);

if (Math.floor(summ)/2 == 0) {
    console.log('Сума товарів є парним числом ' + true + ' так як вона дрівнює - ' + Math.floor(summ))
} else console.log('Сума товарів є непарним числом ' + false + ' так як вона дрівнює - ' + Math.floor(summ))
 

console.log('Сума товарів округлена до сотен = ' + summHundred);
console.log('Сума товарів без копійок = ' + summLow);


console.log('Сума товарів = ' + summ);
console.log('Найдешевший товар коштує - ' + min);
console.log('Найдорожчий товар коштує - ' + max);


console.log('Кодеин коштує - ' + kodein + ', Морфин коштує - ' + morphin + ', Метамфитамин коштує - ' + met);
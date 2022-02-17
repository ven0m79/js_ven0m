const kodein = 15.678;
const morphin = 123.965;
const met = 90.2345;

const max = Math.max(kodein, morphin, met);
const min = Math.min(kodein, morphin, met);
const summ = (kodein + morphin + met);
let summLow = Math.floor(kodein) + Math.floor(morphin) + Math.floor(met);
let summHundred = Math.round(summLow/100)*100;
let keepChange = 500 - summ;



if (Math.floor(summ)%2 == 0) {
    console.log('Сума товарів є парним числом так як вона дорівнює - ' + Math.floor(summ))
} else console.log('Сума товарів є непарним числом так як вона дорівнює - ' + Math.floor(summ))


let odd;
odd = Math.floor(summ)%2 == 0;
console.log('Сума парна? - ' + odd);

 
console.log('Решту з 500 отримає ' + keepChange);

let middlePrice;
middlePrice = (kodein + morphin + met)/3;
console.log('Середнє значення цін, округлене до другого знаку після коми - ' + middlePrice.toFixed(2));


let discount;
let halfPrice;
discount = Math.random()*(50);
console.log('Випадкова знижка - ' + discount);
console.log('Ваша знижка ' + discount + '. ' + 'Сума до сплати - ' + (summ - discount).toFixed(2));

halfPrice = summ/2;
profit = halfPrice - discount;
console.log('Пів ціни - ' + halfPrice);
console.log('Чистий прибуток складає - ' + profit);


console.log('Сума товарів округлена до сотен = ' + summHundred);
console.log('Сума товарів без копійок = ' + summLow);


console.log('Сума товарів = ' + summ);
console.log('Найдешевший товар коштує - ' + min);
console.log('Найдорожчий товар коштує - ' + max);


console.log('Кодеин коштує - ' + kodein + ', Морфин коштує - ' + morphin + ', Метамфитамин коштує - ' + met);
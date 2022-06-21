const kodein = 15.678;
const morphin = 123.965;
const met = 90.2345;

const max = Math.max(kodein, morphin, met);
const min = Math.min(kodein, morphin, met);
const summ = (kodein + morphin + met);
const summLow = Math.floor(kodein) + Math.floor(morphin) + Math.floor(met);
const summHundred = Math.round(summLow/100)*100;
const keepChange = 500 - summ;
const odd = Math.floor(summ)%2 == 0;
const middlePrice = +(((kodein + morphin + met)/3).toFixed(2));
const discount = Math.round(Math.random()*(100));
const clientPaid = +((summ - (summ * discount/100)).toFixed(2));
const profit = summ / 2 - (summ * discount/100);

console.log('Кодеин коштує - ' + kodein + ', Морфин коштує - ' + morphin + ', Метамфетамин коштує - ' + met);
console.log('Найдорожчий товар коштує: ' + max);
console.log('Найдешевший товар коштує: ' + min);
console.log('Вартість всіх товарів: ' + summ);
console.log('Вартість товарів без копійок. Округлення в МЕНЬШУ сторону: ' + summLow);
console.log('Cума товарів, округлена до сотень: ' + summHundred);
console.log('Булеве значення: чи є сума всіх товарів парним числом?: ' + odd);
console.log('Cума решти при оплаті всіх товарів, якщо клієнт платить 500: ' + keepChange);
console.log('Середнє значення цін, округлене до другого знаку після коми: ' + middlePrice);
console.log('Випадкова знижка, %: ' + discount);
console.log('Сума до сплати зі знижкою: ' + clientPaid);
console.log('Чистий прибуток: ' + profit)
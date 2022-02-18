const kodein = 15.678;
const morphin = 123.965;
const met = 90.2345;

const max = Math.max(kodein, morphin, met);
const min = Math.min(kodein, morphin, met);
const summ = (kodein + morphin + met);
const summLow = Math.floor(kodein + morphin + met);
const summHundred = Math.round(summLow/100)*100;
const keepChange = 500 - summ;
const odd = Math.floor(summ)%2 == 0;
const middlePrice = +(((kodein + morphin + met)/3).toFixed(2));
const discount = Math.round(Math.random()*(100));
const clientPaid = +((summ - (summ * discount/100)).toFixed(2));
const profit = summ / 2 - (summ * discount/100);

const homeworkResults = {
    'Найдорожчий товар коштує': max,
    'Найдешевший товар коштує': min,
    'Вартість всіх товарів': summ,
    'Вартість товарів без копійок. Округлення в МЕНЬШУ сторону': summLow,
    'Cума товарів, округлена до сотень': summHundred,
    'Булеве значення: чи є сума всіх товарів парним числом?': odd,
    'Cума решти при оплаті всіх товарів, якщо клієнт платить 500': keepChange,
    'Середнє значення цін, округлене до другого знаку після коми':  middlePrice,
    'Випадкова знижка, %': discount,
    'Сума до сплати зі знижкою': clientPaid,
    'Чистий прибуток': profit
 }
console.log('Кодеин коштує - ' + kodein + ', Морфин коштує - ' + morphin + ', Метамфетамин коштує - ' + met);
console.table(homeworkResults)
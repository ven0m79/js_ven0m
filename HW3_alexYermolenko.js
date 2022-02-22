// Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
// Приклади: 1236 -> 6, 987 -> 9, 385 -> 8
  function getMaxDigit(fullNumb) {
    let str = fullNumb.toString();
    let k = fullNumb.toString().length;
    let maxDigit = 0;
     for (i =0; i < k; i++) {
         if (maxDigit < +str[i]){
            maxDigit = +str[i];
         }
     }
    maxDigitResult = maxDigit;
    return maxDigitResult;
 }
getMaxDigit(34565);
console.log(maxDigitResult);

// Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
function inPow(number, pow) {
    let countResult = 1;
    for (i = 1; i <= pow; i++) {
        countResult = countResult * number;
       finalResult = countResult;
    }
    return finalResult;
}
inPow(8, 3);
console.log(finalResult);

// Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
function formatName(name) {
    let i, j;
    i = name[0].toUpperCase();
    j = name.slice(1).toLowerCase();
    reName = i + j;
    return reName;
}
formatName('ихТиаНдР');
console.log(reName);

// Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%).
// Приклад: 1000 -> 805
function payTaxes(sum) {
    let taxes = 18;
    let militaryTaxes = 1.5;
    sumFixTaxes = sum - (sum * (taxes + militaryTaxes)/100);
    return sumFixTaxes;
}
payTaxes(1000);
console.log(sumFixTaxes);

// Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
// Приклад: getRandomNumber(1, 10) -> 5
function getRandomNumber(numberN, numberM) {
    return n = parseInt(Math.random() * (numberM - numberN) + numberN);
}
getRandomNumber(1, 10);
console.log(n)

// Створити функцію, яка рахує скільки разів певна буква повторюється в слові.
// Приклад: countLetter("а", "Асталавіста") -> 4
function countLetter(letter, word) {
    let counter = 0;
    let l = word.length;
    for (i = 0; i < l; i++) {
        if (word[i] == letter) {
            counter++;
            }
        x = counter;
    }

    return x;
}
countLetter('и', 'вилисипидисти');
console.log(x)
// Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.
// Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$
// Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.

// Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
// Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124

// Створіть функцію, яка видаляє всі букви з речення.
// Приклад: deleteLetters('a', "blablabla") -> "blblbl"

// Створіть функцію, яка перевіряє, чи є слово паліндромом.
// Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true

// Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.
// Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"

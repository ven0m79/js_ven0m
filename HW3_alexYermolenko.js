// Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8
  function getMaxDigit(fullNumb) {
    let str = fullNumb.toString();
    let k = fullNumb.toString().length;
    let maxDigit = 0;
     for (i =0; i < k; i++) {
         if (maxDigit < +str[i]){
            maxDigit = +str[i];
         }
     }
      return maxDigit;
 }

// Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
function inPow(number, pow) {
    let countResult = 1;
    if (pow > 0){
    for (i = 1; i <= pow; i++) {
        countResult = countResult * number;
        }
    return countResult;
}
    else if (pow < 0){
    for (i = pow; i <= -1; i++) {
        countResult = countResult * number;
        }
    countResult = 1 / countResult;
    return countResult;
}
else return countResult;
}

// Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
function formatName(name) {
    return reName = name[0].toUpperCase() + name.slice(1).toLowerCase();
}

// Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805
function payTaxes(sum) {
    let taxes = 18;
    let militaryTaxes = 1.5;
    return sumFixTaxes = sum - (sum * (taxes + militaryTaxes)/100);
}

// Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5
function getRandomNumber(numberN, numberM) {
    return n = parseInt(Math.random() * (numberM - numberN + 1) + numberN);
}

// Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4
function countLetter(letter, word) {
    let counter = 0;
    let l = word.length;
    for (i = 0; i < l; i++) {
        if (word[i].toLowerCase() == letter) {
            counter++;
            }
    }
    return counter;
}
// Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.
// Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$
// Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.
function convertCurrency(money) {
    let temp = 0;
    let uahCurrency = '';
    let dollarsCurrency = '';
    for (i = 0; i < money.length; i++){
        if (money[i] != '$') {
            temp = temp + money[i]
            console.log(money[i], temp)
        } else if (money[i] != uah) {

        }
        uahCurrency = temp * 28.45
    }
    console.log(uahCurrency)
}

// Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам. Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124
function getRandomPassword(numberOfDigits = 8) {
    let maxNumber = Math.pow(10, +numberOfDigits);
    let minNumber = Math.pow(10, +numberOfDigits - 1);
    return nDigits = parseInt(Math.random() * (maxNumber - minNumber)) + minNumber;
}

// Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"
function deleteLetter(letter, word) {
    let l = word.length;
    let newWord ='';
    for (i = 0; i < l; i++) {
        if (word[i].toLowerCase() != letter){
            newWord = newWord + word[i]
        }
    }
    return newWord;
}

// Створіть функцію, яка перевіряє, чи є слово паліндромом.
// Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true
function isPalyndrom(word) {
    let newWord = '';
    let middleWord = '';
    for (i = 0; i <= word.length - 1; i++){
        if (word[i] == ' ') {i++}
    middleWord = middleWord + word[i].toLowerCase();
//    console.log(middleWord)
    }
    for (i = word.length - 1; i >= 0; i--) {
        if (word[i] == ' ') {i--}
        newWord = newWord + word[i].toLowerCase();
//        console.log(newWord)
    }
    word = middleWord;
    if (word == newWord) {
        return true
    } else return false
}

// Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.
// Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"
function deleteDuplicateLetter(sentence) {
    let midWord = '';
    let counter = 0;
    for (i = 0; i <= sentence.length - 1; i++){
        for (j = 0; j <= sentence.length - 1; j++){
                if (sentence[j].toLowerCase() == sentence[i].toLowerCase()) {
                counter++;
                } 
            }
            if (counter == 1) {
                midWord = midWord + sentence[i].toLowerCase();
            }
            counter = 0;
        }
        return midWord  
    }

document.writeln(`<p> Функція №1: ${getMaxDigit("34565")}</br>
                    Функція №2: ${inPow(8, -4)}</br>
                    Функція №3: ${formatName('ІхТіаНдР')}</br>
                    Функція №4: ${payTaxes(1000)}</br>
                    Функція №5: ${getRandomNumber(1, 10)}</br>
                    Функція №6: ${countLetter('и', 'вИлисипИдисти налисИпидили')}</br>
                    Функція №7: <i>In progress....</i></br>
                    Функція №8: ${getRandomPassword()}</br>
                    Функція №9: ${deleteLetter('и', 'вилИсипИдисти')}</br>
                    Функція №10: ${isPalyndrom('Я несу гусеня')}</br>
                    Функція №11: ${deleteDuplicateLetter('Гєна ось той самий рушник який ти просив')}</br>
</p>`)
/* Створіть функцію, яка повертає проміс getRandomChinese(length). Функція працює таким чином:

Запускається цикл(підказка: можна використовувати while) length раз, 
кожен прохід циклу дивимось на останні 5 цифр результату виклику методу Date.now() Наприклад отримали const sign = 16086;.

Конвертуємо отриману цифу в рядок String.fromCharCode(sign); та чекаємо 50 ms

Функція gerRandomChinese(length) повинна повернути рядок довжиною (length) з китайськими ієрогліфами. 
Час роботи проміса має складати length * 50ms.

(Якщо викликати getRandomChinese(4), отримаємо результат "촛궻簽紙" за 200ms */
async function getRandomChinese(length) {
    let i = 0;
    array = [];
    while (i < length) {
        setTimeout(() => {
            const sign = String.fromCharCode(Date.now()).slice(-5);
            array.push(sign);
            console.log(array);
                       
        }, 500);
        i++ 
    };
};
getRandomChinese(5)


/*  async function getRandomChinese(length) {
    let i = 0; 
    while (i < length) {
         const promise = new Promise (res, rej) {
               
         setTimeout(() => {     
             const sign = String.fromCharCode(Date.now()).slice(-5);     
             console.log(sign);
             }, 5000);
         };
             i++
     } 
     
 }
 getRandomChinese(5) */
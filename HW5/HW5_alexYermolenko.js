//1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]
console.log('Функція №1')
let getRandomArray = function(length, min, max) {
const myArray = []; 
let myValue = 0;
if (max > min) {
    for (let i = 0; i < length; i++) {
        myValue = parseInt(Math.random() * (max - min + 1) + min);
        if (myValue >= min && myValue <= max) {
        myArray.push(myValue);
        }
        else i--;
    }
    return myArray;
}
else return console.log('Ви ввели min більше ніж max. Спробуйте ще')
}
console.log('Мій массив: ' + getRandomArray(100, -20, 30))

//2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ 
//Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2
console.log('Функція №2')
let getModa = function(...numbers) {
    const myArray = numbers.filter(item => {return !(item % 1)})
    const objNumbers = myArray.reduce(function(myArray, item) {
    if (item in myArray) {
        myArray[item]++
    }
    else {
        myArray[item] = 1
    }
    return myArray
}, {})
console.log('Мода = ' + 
  Object.keys(objNumbers).find((el) => {
    return objNumbers[el] === Math.max(...Object.values(objNumbers))
  })
)

}
getModa(6, 2, 55, 11, 78, 2.3, 55, 77, 57, 87, 23, 2, 56, 3, 2)

//3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
//Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4
console.log('Функція №3')
let getAverage = function(...numbers) {
    let middleNumber = 0;
    const myArray = numbers.filter(item => {return !(item % 1)})
    sumNumber = myArray.reduce(function(acc, item) {
        return item + acc
      }, 0)
      return middleNumber = sumNumber/(myArray.length)
    }
    console.log('Cереднє арифметичне всіх переданих аргументів ' + getAverage(6, 2, 55, 11, 78, 2, 55.5, 77, 57, 87, 23, 2, 56, 3, 2))

//4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
//Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3
console.log('Функція №4')
let getMedian = function(...numbers){
    const myArray = numbers.filter(item => {return !(item % 1)})
      .sort((a, b) => a - b);
    let centerArrayIndex = myArray.length / 2
      console.log('Отсортований мій массив: ' + myArray)
      if (centerArrayIndex % 2 === 0){
        console.log('Довжина масиву парна')
        return (myArray[centerArrayIndex-1] + myArray[centerArrayIndex])/2
      } else 
      console.log('Довжина масиву непарна');
      centerArrayIndex = Math.floor(centerArrayIndex)
      return (myArray[centerArrayIndex])
    }
    console.log('Медіана - ' + getMedian(6, 2, 55.1, 11, 78, 2, 55, 77.9, 57, 87, 23, 2, 56, 3))

//5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
//Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]
console.log('Функція №5')
const filterEvenNumbers = function(...numbers) {
    return filteredArray = numbers.filter((value) => {
    return value % 2 !== 0;
  });
  }
  console.log('Отсортований мій массив: ' + filterEvenNumbers(1, 2, 3, 4, 5, 6))

//6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
//Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3
console.log('Функція №6')
const countPositiveNumbers = function(...numbers) {
    let newArray = numbers.filter((item, array) => {
      return item > 0
      })
      return positiveNumberCounter = newArray.length;
    }
    console.log('Кількість чисел більше 0: ' + countPositiveNumbers(1, -2, 3, -4, -5, 6, 9))

//Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
//Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

//Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
//Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?" Приклад: replaceBadWords("Holy shit!") -> "Holy ****!" Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"

//Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру. 
//Приклад: divideByThree("Commander) -> ["com", "man", "der"] 
//Приклад: divideByThree("live") -> ["liv", "e"]

//Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові. Для тестів не передавайте слова в яких більше 10 букв. Краще взагалі обмежити работу функції 10 буквами. 
//Приклад: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam", "nma"] Приклад: generateCombinations("ol") -> ["ol", "lo"]
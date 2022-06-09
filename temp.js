//Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
//Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

let getAverage = function(...numbers) {
let middleNumber = 0;
const myArray = numbers.filter(item => {return !(item % 1)})
sumNumber = myArray.reduce(function(acc, item) {
    return item + acc
  }, 0)
  return middleNumber = sumNumber/(myArray.length)
}
console.log(getAverage(6, 2, 55, 11, 78, 2, 55.5, 77, 57, 87, 23, 2, 56, 3, 2))
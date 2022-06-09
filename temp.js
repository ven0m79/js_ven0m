//5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
//Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

const filterEvenNumbers = function(...numbers) {
  return filteredArray = numbers.filter((value) => {
  return value % 2 !== 0;
});
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6))
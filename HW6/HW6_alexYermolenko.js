/*Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.
Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.
Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, 
а значення – кількість їх повторень.*/

const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

//1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента. 
//Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл

const getSubjects = ((stud) => {
 return arraySubjects = Object.keys(stud.subjects)
 .map((item) => {
  return ((item[0].toUpperCase() + item.slice(1).toLowerCase()).replaceAll("_", " "))
 })
})
console.log(getSubjects(students[0]))

//2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. 
//Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)

const getAverageMark = ((stud) => {
let newArray = [];
const arrayMarks = Object.values(stud.subjects)
for (let i = 0; i < arrayMarks.length; i++) {
  newArray = newArray.concat(arrayMarks[i])
  }
const result = newArray.reduce((acc, item) => {
return acc  +  item 
})
return (result / newArray.length).toFixed(2)
})
console.log(getAverageMark(students[0]))

//3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду 
//по переданому студенту (вам знадобиться функція з попереднього завдання). ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.

const getStudentInfo = ((stud) => {
const studentsInfos = {
  course: stud.course,
  name: stud.name,
  averageMark: getAverageMark(stud)
}
return studentsInfos
})
console.log(getStudentInfo(students[0]))

//4. Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.

const getStudentsNames = ((studName) => {
const value = studName.map((item) => {
return item.name
})
return value.sort();
})

console.log(getStudentsNames(students))

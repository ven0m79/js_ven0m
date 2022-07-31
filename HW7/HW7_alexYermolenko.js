const countries = [
  { country: "ukraine", tax: 0.195, middleSalary: 1789, vacancies: 11476 },
  { country: "latvia", tax: 0.25, middleSalary: 1586, vacancies: 3921 },
  { country: "litva", tax: 0.15, middleSalary: 1509, vacancies: 1114 },
];

//1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. 
//Функція повинна викликатись через call та працювати з даними через this
console.log('Функція №1')
function getMyTaxes(salary) {
  return Number((salary * this.tax).toFixed(2))
}
console.log(getMyTaxes.call(countries[0], 1000))

//2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. 
//(tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this
console.log('Функція №2')
function listOfCountries(countries) {
  const setInfoFunction = function () {
    return Number((this.tax + this.middleSalary).toFixed(2));
  };

  return countries.map((el) => setInfoFunction.call(el));
}

console.log(listOfCountries(countries));

//3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. 
//(tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this
console.log('Функція 3')
function getTotalTaxes(countries) {
  const setInfoFunction2 = function () {
    return Number((this.tax + this.middleSalary + this.vacancies).toFixed(2));
  };

  return countries.map((el) => setInfoFunction2.call(el));
}

console.log(getTotalTaxes(countries));

//4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. 
//Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
//profit = salary - taxes;
console.log('Функція №4')
function getMySalary() {
  console.log('10 секунд - це дуже довго!! Хай буде 3 і всього 10 разів))')
  const resObject = {};
  let timerId = setInterval(() => {
    resObject.salary = Number((Math.random() * (2000 - 1500 + 1) + 1500).toFixed());
    resObject.taxes = (this.tax * resObject.salary).toFixed(2);
    resObject.profit = Number(resObject.salary - resObject.taxes).toFixed(2);
    console.log(resObject)
  }, 3000);
  setTimeout(() => {
    clearInterval(timerId)
  }, 30000)
}

getMySalary.call(countries[2])
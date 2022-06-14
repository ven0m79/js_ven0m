const countries = [
    { country: "ukraine", tax: 0.195, middleSalary: 1789, vacancies: 11476 },
    { country: "latvia", tax: 0.25, middleSalary: 1586, vacancies: 3921 },
    { country: "litva", tax: 0.15, middleSalary: 1509, vacancies: 1114 },
  ];
  
  function listOfCountries(countries) {
    const setInfoFunction = function () {
      return Number((this.tax + this.middleSalary).toFixed(2));
    };
  
    return countries.map((el) => setInfoFunction.call(el));
  }
  
  console.log(listOfCountries(countries));
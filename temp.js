//Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ 
//Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2
let getModa = function(...numbers) {
    let moda = [];
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

console.log(objNumbers);
console.log(objNumbers)
}
getModa(6, 2, 55, 11, 78, 2.3, 55, 77, 57, 87, 23, 2, 56, 3, 2)





const arr = [1, 2, 3, 3, 2, 2, 18, 18, 18, 18, 18, 18];

const res = arr.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] = acc[curr] + 1;
  } else {
    acc[curr] = 1;
  }

  return acc;
}, {});

console.log(
  Object.keys(res).find((el) => {
    return res[el] === Math.max(...Object.values(res));
  })
);

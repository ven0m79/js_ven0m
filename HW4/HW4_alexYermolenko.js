const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів:
//[["Олександр", "Олена"], [..], [...]];

let getPairs = function() {
    let hloptsi = [];
    let zhinky = [];
        const allPairs = [];
        
    for (let i of students){
        if (i.endsWith('а')) {
            zhinky.push(i);
            } else
            hloptsi.push(i);
       }
       for (i = 0; i < hloptsi.length; i++) {
        allPairs.push([hloptsi[i], zhinky[i]])
        
       }
    return  allPairs;
    }
    console.log(getPairs());

//Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду:
//[["Олександр і Олена", "Теорія автоматів"], [...], [...]]

const addThemesToPairs = function() {
    const themesToPairs = [];
    const pairsTemp = getPairs();
    let x;
    let y;
    for (i = 0; i < themes.length; i++) {
        y = pairsTemp[i];
        y = y.join(' i ');
        x = y.split();
        x.push(themes[i]);
        themesToPairs.push(x)
    }
    return themesToPairs;
}
console.log(addThemesToPairs());


//Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

function addMarksToStidents() {
    const marksToStidents = [];
    for (i = 0; i < students.length; i++) {
        marksToStidents.push([students[i], marks[i]]);
    }
    return marksToStidents;
}
console.log(addMarksToStidents());

//Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив):
//[["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

function addRandomMarksToStudents() {
let tempArray = addThemesToPairs();
let finalArray = [];
for (i = 0; i < tempArray.length; i++) {
    finalArray.push(tempArray[i]);
    finalArray[i].push(Math.floor(Math.random()*5+1))
    }
    return finalArray;
}
console.log(addRandomMarksToStudents());
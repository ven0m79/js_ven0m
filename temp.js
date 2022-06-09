//Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити масив на слова за допомогою
// функції .split(" "), після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
//Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?" Приклад: replaceBadWords("Holy shit!") -> "Holy ****!" 
//Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"

const replaceBadWords = (string) => {
const badWordsArray = ['fuck', 'shit'];
newArray = string.split(' ')
for (let i = 0; i < newArray.length; i++){
  if (newArray[i])
  console.log(newArray[i])

}



let temp = newArray.map((item) => {
  console.log(badWordsArray[1])
  item === badWordsArray[0]
}) 
return temp
}
console.log(replaceBadWords('Are you fucking kidding?'))
let year = prompt('Якого ти року народження');
alert(2022 - (year));

let name = prompt('Як тебе  звати?');
smallName = name.toLowerCase();
withoutFirstLetterName = smallName.slice(1);
firstLetter = name[0].toUpperCase();

alert('Вас звати:' + ' '+ firstLetter + withoutFirstLetterName);



function convert(result) {
    let newCourse = result * 28;
    return newCourse
    
  }
  
  let money = convert(7);
  console.log(money);
  
  
  function createCloth(name, size, color) {
    let newObject = [name, size, color];
    return newObject
    
  }
  
  
  
  let cloth = createCloth('Джинсы','M','red' )
  
  
  
  console.log('name: ' + cloth[0] + ', size: ' + cloth[1] + ', color: ' + cloth[2]);
  console.log(cloth);
  
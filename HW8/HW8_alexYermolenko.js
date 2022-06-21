class Students { 
  constructor(university, course, fullName, marks, flag) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = marks;
    this.flag = flag;
  }
  getInfo() {
    return 'Студент ' + this.course + 'го курсу ' +   this.university + ', ' + this.fullName
  }

  get marksOfStudent() {
    if (this.flag)
    return this.marks
    else return null
  }

  set marksOfStudent(mark) {
    if (this.flag)
    return this.marks.push(mark)
    else return null
  }

  getAverageMark() {
    const result = this.marks.reduce((acc, curr) => {
      return (acc + curr)
    }, 0)
    if (this.flag)
    return +(result / this.marks.length).toFixed(2)
    else return null
  }

  dismiss() {
    this.flag = false
  }

  recover() {
    this.flag = true
  }

}
const user = new Students('MFTI', 3, 'Петр Петров', [5, 4, 4, 5, 5], true)


console.log(user.getInfo());
console.log(user.marksOfStudent);

user.marksOfStudent = 2;
console.log(user.marksOfStudent);
console.log(user.getAverageMark());

user.dismiss();
console.log(user.flag)
console.log(user.marksOfStudent);

user.recover();
console.log(user.flag)
console.log(user.marksOfStudent);

//ADVANCED

class BudgetStudent extends Students {
  constructor(scholarShip, university, course, fullName, marks, flag) {
    super(university, course, fullName, marks, flag);
    this.scholarShip = scholarShip;
    let timerId = setInterval (function() {
      this.getScholarship()

    }.bind(this), 3000);
    setTimeout(() => {
      clearInterval(timerId)}, 30000)   
    
      
  }

   getScholarship = (() => {
    if(this.flag == false || this.getAverageMark() < 4) {
    this.scholarShip = null;
    console.log(this.fullName + ' Дульки тобі а не степуху)') 
    return}
    else { 
      this.scholarShip += 1400;
      console.log(this.fullName + ` Тримай степуху! - 1400 вже відправлені тобі по е-мейлу :D. Вже назбиралось ` + this.scholarShip + ` гривасєй`) 
    return
    }
  })
}
const studentAdv1 = new BudgetStudent(0, 'KPI', 2, 'Bogdan Muranets', [4, 5, 3, 5], true);
const studentAdv2 = new BudgetStudent(0, 'KPI', 1, 'Andriy Dovbenko', [4, 5, 2, 3], false);
const studentAdv3 = new BudgetStudent(0, 'KPI', 4, 'Sergiy Murzak', [4, 2, 2, 3], true);




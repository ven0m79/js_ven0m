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
let n, m, even;
let sum = 0;

do {
 n = +prompt('Введіть ціле число N', 10);
}
while (!Number.isInteger(n));
console.log(n);

do {
    m = +(prompt('Введіть ціле число M (повинно бути більше N)', 100));
}
   while (!Number.isInteger(m) || m <= n);
console.log(m);

if (even = confirm('Пропускати парні числа?')) {
    for (let i = n; i < m; i++) {
        if (i % 2 == 0){
            i++;
            sum = sum + i;
            console.log('i = ' + i);
            console.log('Сумма чисед від N до М дорівнює: ' + sum)
        } else  sum = i;
    }
} else
    for (let i = n; i <= m; i++) {
        console.log('i = ' + i);
        sum = sum + i;
        console.log('Сумма чисед від N до М дорівнює: ' + sum)
    }
console.log('Сума чисел буде дорівнювати - ' + sum);

document.writeln(
    `<p>Ви ввели N: ${n}</br>
     Ви ввели M: ${m}</p>
     <p>Пропускати парні: ${even}</p>
     <p>Сумма чисед від N до М дорівнює: ${sum}</p>
     <div class=a>* підрахунки можна глянути в консолі</div>`)
     ;
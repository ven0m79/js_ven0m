let n, m;
let sum;

do {
 n = +(prompt('Введіть ціле число N', 10));
}
while (!Number.isInteger(n));
console.log(n);

do {
    m = +(prompt('Введіть ціле число M (повинно бути більше N)', 20));
   }
   while (!Number.isInteger(m) || m <= n);
console.log(m);

if (confirm('Пропускати парні числа?')) {
sum = n +


};
//n % 2 == 0;
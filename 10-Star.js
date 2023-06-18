let rows = 10;
let i, j;

for (i = 1; i <= rows; i++) {
  let a = '';
  for (j = 1; j <= i; j++) {
    a += '* ';
  }
  console.log(a);
}
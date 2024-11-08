let x = Number(prompt("x값 : "));
let operator = prompt("연산자 입력 (+,-,*,/,%) : ");
let y = Number(prompt("Y값 : "));

console.log(x + operator + y);

if (operator == "+") {
  console.log(x + y);
} else if (operator == "-") {
  console.log(x - y);
} else if (operator == "*") {
  console.log(x * y);
} else if (operator == "/") {
  console.log(x / y);
} else if (operator == "%") {
  console.log(x % y);
}

const convert = (value) => {
  let numValue = Number(value);

  if (value.toLowerCase() === "true") return true;
  if (value.toLowerCase() === "false") return false;

  return value;
};

let x = prompt("비교할 첫 번째 값을 입력 : ");
let operator = prompt("연산자 입력(==,===,!=,!==,>,<,>=,<=) : ");
let y = prompt("비교할 두 번째 값을 입력 : ");

let convertValue1 = convert(x);
let convertValue2 = convert(y);

console.log(x + operator + y);

if (operator == "==") {
  console.log(x == y);
} else if (operator == "===") {
  console.log(x === y);
} else if (operator == "!=") {
  console.log(x != y);
} else if (operator == "!==") {
  console.log(x !== y);
} else if (operator == ">") {
  console.log(x > y);
} else if (operator == "<") {
  console.log(x < y);
} else if (operator == ">=") {
  console.log(x >= y);
} else if (operator == "<=") {
  console.log(x <= y);
}

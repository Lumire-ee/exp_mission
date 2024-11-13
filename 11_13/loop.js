let i = 0;

for (i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("------------");

for (i = 0; i < 10; i++) {
  if (i === 4) break;
  console.log(i);
}
console.log("------------");

for (i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}
console.log("------------");
i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

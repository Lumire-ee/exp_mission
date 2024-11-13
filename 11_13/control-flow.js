const readline = require("readline");

// readline을 Promise로 래핑
const askQuestion = (query) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
};

// 실행 함수
const main = async () => {
  const answer1 = await askQuestion("현재 나이를 입력하세요: ");
  const answer2 = await askQuestion("숫자를 입력하세요: ");

  const res = parseInt(answer1) + parseInt(answer2);
  console.log(res);
};

main();

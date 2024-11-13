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
  const answer1 = await askQuestion("첫 번째 값을 입력하세요: ");
  const answer2 = await askQuestion("두 번째 값을 입력하세요: ");

  console.log(`첫 번째 값: ${answer1}`);
  console.log(`두 번째 값: ${answer2}`);
};

main();

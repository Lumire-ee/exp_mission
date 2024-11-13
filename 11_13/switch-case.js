// Run by Node.js
const readline = require("readline");

(async () => {
  console.log("월을 입력해주세요(1-12) ");
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    switch (parseInt(line)) {
      case 12:
      case 1:
      case 2:
        console.log("겨울입니다.");
        break;
      case 3:
      case 4:
      case 5:
        console.log("봄입니다.");
        break;
      case 6:
      case 7:
      case 8:
        console.log("여름입니다.");
        break;
      case 9:
      case 10:
      case 11:
        console.log("가을입니다.");
        break;
      default:
        console.log("유효한 월을 입력해주세요 (1-12).");
    }
    rl.close();
  }

  process.exit();
})();

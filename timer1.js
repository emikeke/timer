const args = process.argv;
let beepSum = 0;

if (args.length === 2) {
  console.log(" ");
} else {
  for (let i = 2; i < args.length; i++) {
    if (Number(args[i]) < 0) {
      continue;
    } else if (isNaN(Number(args[i]))) {
      continue;
    }
    beepSum += 300 * Number(args[i]);
    setTimeout (() => {
      process.stdout.write("beep\n");
    }, beepSum);
  }
}
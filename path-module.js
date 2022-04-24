const os = require("os");
const path = require("path");

// To get the user info of an operating system
const user = os.userInfo();
console.log(user);

// To get the system uptime in seconds

console.log(`The System Uptime is ${os.uptime()}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
// console.log(currentOS);

// console.log(path.sep);

const filePath = path.join("./content", "subfolder", "test.txt");

console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolutePath = path.resolve(
  __dirname,
  "content",
  "subfolder",
  "test.txt"
);
console.log(absolutePath);


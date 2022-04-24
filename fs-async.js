const { readFile, writeFile } = require("fs");
console.log("Task Started");
readFile("./content/first.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return null;
  }
  const first = data;
  writeFile(
    "./content/result-async.txt",
    `Here is the result: ${first}`,
    (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Task Done");
    }
  );
  console.log(data);
});
console.log("Starting New Task!");
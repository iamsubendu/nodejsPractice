const fs = require("fs");

fs.readFile("sample.txt", "utf-8", (err, data) => {
    console.log(err, data)
});

const d = fs.readFileSync("sample.txt")
console.log(d)
console.log(d.toString());

fs.writeFile("sample.txt", "udfhiosudh", () => {
    console.log("written to the file")
});

const da = fs.writeFileSync("sample.txt", "udfhiosudh")
console.log(d)

console.log("Finished reading file");
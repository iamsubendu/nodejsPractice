const url = require("url")

const myURl = new URL("https://example.org");
myURl.pathname = "/a/b/c";
myURl.search = "?d=e";
myURl.hash = "#fgh";

console.log(myURl)
console.log(myURl.href)
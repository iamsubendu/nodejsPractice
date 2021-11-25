const path = require("path");

const a1 = path.basename("dirPath");
const a2 = path.dirname("dirPath");

const a3 = path.extname(__filename);
console.log(__filename, a3);
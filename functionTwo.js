//commonjs module
const adr = require("./functionOne");

adr();





//ES6 module
// to make it wok we have to add type: "module"
//in pckg.json
import { bst } from "./functionThree.mjs";

bst();
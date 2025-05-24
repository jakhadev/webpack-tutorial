const { calc } = require("./modules/calc.module");

console.log("Calculating");
console.log(calc(1, 2));

const api = process.env.API_URL;
console.log("API URL:", api);

const { Parser } = require("../src/Parser");

const parser = new Parser();

const program = `12 "hello"`;

const ast = parser.parse(program);

console.log(JSON.stringify(ast, null, 2));

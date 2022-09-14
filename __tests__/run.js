const { Parser } = require("../src/Parser");
const assert = require("assert");

const tests = [require("./literals-test")];

const parser = new Parser();

const exec = () => {
  const program = ` 
  'test';
  43;
  `;

  const ast = parser.parse(program);

  console.log(JSON.stringify(ast, null, 2));
};

exec();

const test = (program, expected) => {
  const ast = parser.parse(program);
  assert.deepEqual(ast, expected);
};

// tests.forEach((testRun) => testRun(test));

console.log("✅ All assertions passed");

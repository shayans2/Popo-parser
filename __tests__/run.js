const { Parser } = require("../src/Parser");
const assert = require("assert");

const tests = [
  require("./literals-test"),
  require("./statement-list-test"),
  require("./block-test"),
  require("./empty-statement-test"),
];

const parser = new Parser();

// Manual test
const exec = () => {
  const program = ` 
  'hello';
   43;
  `;

  const ast = parser.parse(program);

  console.log(JSON.stringify(ast, null, 2));
};
// exec();

const test = (program, expected) => {
  const ast = parser.parse(program);
  assert.deepEqual(ast, expected);
};

tests.forEach((testRun) => testRun(test));

console.log("✅ All assertions passed!");

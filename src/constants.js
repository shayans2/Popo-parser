const constants = {
  // Token Types
  NUMBER: "NUMBER",
  STRING: "STRING",
  SEMICOLON: ";",
  CURLY_BRACE_OPEN: "{",
  CURLY_BRACE_CLOSE: "}",
  ADDITIVE_OPERATOR: "ADDITIVE_OPERATOR",

  // Parser
  Program: "Program",
  NumericLiteral: "NumericLiteral",
  StringLiteral: "StringLiteral",
  ExpressionStatement: "ExpressionStatement",
  BlockStatement: "BlockStatement",
  EmptyStatement: "EmptyStatement",
  BinaryExpression: "BinaryExpression",
};

const regularExpressions = {
  ADDITIVE_OPERATOR: /^[+\-]/,

  SEMICOLON: /^;/,

  CURLY_BRACE_OPEN: /^\{/,
  CURLY_BRACE_CLOSE: /^\}/,

  NUMBER: /^\d+/,
  STRING_DOUBLE: /^"[^"]*"/,
  STRING_SINGLE: /^'[^']*'/,

  WHITE_SPACE: /^\s+/,

  SINGLE_COMMENT: /^\/\/.*/,
  MULTI_COMMENT: /^\/\*[\s\S]*?\*\//,
};

module.exports = { constants, regularExpressions };

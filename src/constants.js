const constants = {
  // Token Types
  NUMBER: "NUMBER",
  STRING: "STRING",
  SEMICOLON: ";",

  // Parser
  Program: "Program",
  NumericLiteral: "NumericLiteral",
  StringLiteral: "StringLiteral",
  ExpressionStatement: "ExpressionStatement",
};

const regularExpressions = {
  SEMICOLON: /^;/,
  NUMBER: /^\d+/,
  STRING_DOUBLE: /^"[^"]*"/,
  STRING_SINGLE: /^'[^']*'/,
  WHITE_SPACE: /^\s+/,
  SINGLE_COMMENT: /^\/\/.*/,
  MULTI_COMMENT: /^\/\*[\s\S]*?\*\//,
};

module.exports = { constants, regularExpressions };

// A way to transform to different AST format
const { constants } = require("./constants");

const DefaultFactory = {
  Program(body) {
    return {
      type: constants.Program,
      body,
    };
  },
  EmptyStatement() {
    return {
      type: constants.EmptyStatement,
    };
  },

  BlockStatement(body) {
    return {
      type: constants.BlockStatement,
      body,
    };
  },

  ExpressionStatement(expression) {
    return {
      type: constants.ExpressionStatement,
      expression,
    };
  },

  StringLiteral(value) {
    return {
      type: constants.StringLiteral,
      value: value,
    };
  },

  NumericLiteral(value) {
    return {
      type: constants.NumericLiteral,
      value: value,
    };
  },
};

module.exports = {
  DefaultFactory,
};

const { constants } = require("./constants");
const { Tokenizer } = require("./Tokenizer");

// Recursive descent parser
class Parser {
  constructor() {
    this._string = "";
    this._tokenizer = new Tokenizer();
  }

  // Parses a string into an AST.
  parse(string) {
    // this._string = string;
    this._tokenizer.init(string);
    this._lookahead = this._tokenizer.getNextToken();
    return this.Program();
  }

  // Main entry
  Program() {
    return {
      type: constants.Program,
      body: this.StatementList(),
    };
  }

  StatementList() {
    const list = [this.Statement()];
    while (this._lookahead != null) {
      list.push(this.Statement());
    }
    return list;
  }

  // Expression Statement
  Statement() {
    return this.ExpressionStatement();
  }

  ExpressionStatement() {
    const expression = this.Expression();
    this._eat(constants.SEMICOLON);
    return {
      type: constants.ExpressionStatement,
      expression,
    };
  }

  Expression() {
    return this.Literal();
  }

  Literal() {
    switch (this._lookahead.type) {
      case constants.NUMBER:
        return this.NumericLiteral();
      case constants.STRING:
        return this.StringLiteral();
    }
    throw new SyntaxError("Literal: unexpected literal production");
  }

  StringLiteral() {
    const token = this._eat(constants.STRING);

    return {
      type: constants.StringLiteral,
      value: token.value.slice(1, -1),
    };
  }

  // NumericLiteral
  NumericLiteral() {
    const token = this._eat(constants.NUMBER);
    return {
      type: constants.NumericLiteral,
      value: Number(token.value),
    };
  }

  _eat(tokenType) {
    const token = this._lookahead;

    if (token === null) {
      throw SyntaxError(`Unexpected end of input, expected: "${tokenType}"`);
    }

    if (token.type !== tokenType) {
      throw SyntaxError(
        `Unexpected token: "${token.type}", expected: "${tokenType}"`
      );
    }

    this._lookahead = this._tokenizer.getNextToken();

    return token;
  }
}

module.exports = {
  Parser,
};

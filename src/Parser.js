const { constants } = require("./constants");
const { Tokenizer } = require("./Tokenizer");
// import { Tokenizer } from "./Tokenizer";

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
      body: this.NumericLiteral(),
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

  // NumericLiteral
  NumericLiteral() {
    const token = this._eat(constants.NUMBER);
    return {
      type: constants.NumericLiteral,
      value: Number(token.value),
    };
  }
}

module.exports = {
  Parser,
};

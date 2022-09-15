const { constants, regularExpressions } = require("./constants");

const Spec = [
  [regularExpressions.ADDITIVE_OPERATOR, constants.ADDITIVE_OPERATOR],

  [regularExpressions.SEMICOLON, constants.SEMICOLON],

  [regularExpressions.CURLY_BRACE_OPEN, constants.CURLY_BRACE_OPEN],
  [regularExpressions.CURLY_BRACE_CLOSE, constants.CURLY_BRACE_CLOSE],

  [regularExpressions.NUMBER, constants.NUMBER],
  [regularExpressions.STRING_DOUBLE, constants.STRING],
  [regularExpressions.STRING_SINGLE, constants.STRING],

  [regularExpressions.WHITE_SPACE, null],

  [regularExpressions.SINGLE_COMMENT, null],
  [regularExpressions.MULTI_COMMENT, null],
];

class Tokenizer {
  init(string) {
    this._string = string;
    this._cursor = 0;
  }

  isEOF() {
    return this._cursor === this._string.length;
  }

  hasMoreTokens() {
    return this._cursor < this._string.length;
  }

  getNextToken() {
    if (!this.hasMoreTokens()) {
      return null;
    }

    const string = this._string.slice(this._cursor);

    for (const [regexp, tokenType] of Spec) {
      const tokenValue = this._match(regexp, string);

      if (tokenValue === null) {
        continue;
      }

      if (tokenType === null) {
        return this.getNextToken();
      }

      return {
        type: tokenType,
        value: tokenValue,
      };
    }
    throw new SyntaxError(`Unexpected token: "${string[0]}"`);
  }

  _match(regexp, string) {
    const matched = regexp.exec(string);
    if (matched == null) {
      return null;
    }
    this._cursor += matched[0].length;
    return matched[0];
  }
}

module.exports = { Tokenizer };

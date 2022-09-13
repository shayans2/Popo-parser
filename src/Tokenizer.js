const { constants } = require("./constants");

class Tokenizer {
  init(string) {
    this._string = string;
    this._cursor = 0;
  }

  hasMoreTokens() {
    return this._cursor < this._string.length;
  }

  getNextToken() {
    if (!this.hasMoreTokens()) {
      return null;
    }

    const string = this._string.slice(this._cursor);
    // BEGIN Numbers
    if (!Number.isNaN(Number(string[0]))) {
      let number = "";
      while (!Number.isNaN(Number(string[this._cursor]))) {
        number += string[this._cursor++];
      }

      return {
        type: constants.NUMBER,
        value: number,
      };
    }
    // END Numbers
  }
}

module.exports = { Tokenizer };

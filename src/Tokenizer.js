const { constants } = require("./constants");

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

    // BEGIN Strings
    if (string[0] === '"') {
      let generatedString = "";
      do {
        generatedString += string[this._cursor++];
      } while (string[this._cursor] !== '"' && !this.isEOF());
      generatedString += this._cursor++;
      return {
        type: constants.STRING,
        value: generatedString,
      };
    }

    // END Strings
  }
}

module.exports = { Tokenizer };

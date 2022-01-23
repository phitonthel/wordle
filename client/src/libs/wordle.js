class Lib {
  static createCounterObj() {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    const output = {}

    for (let i = 0; i < alphabets.length; i++) {
      const alphabet = alphabets[i];
      output[alphabet] = 0
    }

    return output
  }

  static fillCounterObj(dictionary, counter = this.createCounterObj()) {
    dictionary.forEach(word => {
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        counter[char] ++
      }
    });
    return counter
  }

  static sort(obj) {
    let sortable = [];
    for (let key in obj) {
      sortable.push([key, obj[key]]);
    }

    sortable.sort((a, b) => {
      return b[1] - a[1];
    });

    let objSorted = {}
    sortable.forEach((item) => {
      objSorted[item[0]] = item[1]
    })

    return objSorted
  }

  static convertObjectToArray(object) {
    let output = []
    for (const char in object) {
      if (Object.hasOwnProperty.call(object, char)) {
        const count = object[char];
        output.push({
          char, count
        })
      }
    }
    return output
  }

  static filterString(string, filteredChar) {
    let output = ''
    string.split('').forEach(char => {
      if (char !== filteredChar) output += char
    });
    return output
  }

  static createAvailableChars(excludedChars, alphabets = 'abcdefghijklmnopqrstuvwxyz') {
    excludedChars.split('').forEach(excludedChar => {
      alphabets = this.filterString(alphabets, excludedChar)
    });
    return alphabets
  }

  // white
  static filterWordsByAvailableChars(words, availableChars) {
    const output = []

    words.forEach(word => {
      let countChar = 0
    
      for (let i = 0; i < availableChars.length; i++) {
        const includedChar = availableChars[i];
        if (word.includes(includedChar)) {
          countChar++
        }
      }
    
      if (countChar == 5) {
        output.push(word)
      }
    });

    return output
  }

  // yellow
  static filterWordsByIncludedChars(words, includedChars) {
    const output = []
    words.forEach(word => {
      let countChar = 0

      for (let i = 0; i < includedChars.length; i++) {
        const includedChar = includedChars[i];
        if (word.includes(includedChar)) {
          countChar++
        }
      }

      if (countChar === includedChars.length) {
        output.push(word)
      }
    });

    return output
  }

  // green
  // static positionedCharsType = {
  //   1: '',
  //   2: 'r'
  //   ...
  // }
  static filterWordsByPosition(words, positionedChars) {
    const output = []
    words.forEach(word => {
      let countChar = 0
      let numberOfPositionedChars = 0

      for (const position in positionedChars) {
        const char = positionedChars[position];

        if (char) {
          numberOfPositionedChars ++
          if (word[position] == char) {
            countChar ++
          }
        }
      }

      if (countChar === numberOfPositionedChars) {
        output.push(word)
      }
    });

    return output
  }
}

module.exports = Lib
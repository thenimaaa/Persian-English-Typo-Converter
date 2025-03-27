(function() {
  "use strict";

  const enToFa = {
    "`": "ذ",
    "~": "ِ",
    "1": "۱",
    "!": "!",
    "2": "۲",
    "@": "@",
    "3": "۳",
    "#": "#",
    "4": "۴",
    "$": "$",
    "5": "۵",
    "%": "٪",
    "6": "۶",
    "^": "َ",
    "7": "۷",
    "&": "&",
    "8": "۸",
    "*": "*",
    "9": "۹",
    "(": "(",
    "0": "۰",
    ")": ")",
    "-": "-",
    "_": "_",
    "=": "=",
    "+": "+",
    "q": "ض",
    "Q": "ض",
    "w": "ص",
    "W": "ص",
    "e": "ث",
    "E": "ث",
    "r": "ق",
    "R": "ق",
    "t": "ف",
    "T": "ف",
    "y": "غ",
    "Y": "غ",
    "u": "ع",
    "U": "ع",
    "i": "ه",
    "I": "ه",
    "o": "خ",
    "O": "خ",
    "p": "ح",
    "P": "ح",
    "[": "ج",
    "{": "ج",
    "]": "چ",
    "}": "چ",
    "\\": "پ",
    "|": "÷",
    "a": "ش",
    "A": "ش",
    "s": "س",
    "S": "س",
    "d": "ی",
    "D": "ی",
    "f": "ب",
    "F": "ب",
    "g": "ل",
    "G": "ل",
    "h": "ا",
    "H": "آ",
    "j": "ت",
    "J": "ت",
    "k": "ن",
    "K": "ن",
    "l": "م",
    "L": "م",
    ";": "ک",
    ":": "ک",
    "'": "گ",
    "\"": "گ",
    "z": "ظ",
    "Z": "ظ",
    "x": "ط",
    "X": "ط",
    "c": "ز",
    "C": "ز",
    "v": "ر",
    "V": "ر",
    "b": "ذ",
    "B": "ذ",
    "n": "د",
    "N": "د",
    "m": "ئ",
    "M": "ء",
    ",": "و",
    "<": "و",
    ".": "،",
    ">": "،",
    "/": "؟",
    "?": "؟"
  };

  const faToEn = {
    "ذ": "`",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
    "۰": "0",
    "ض": "q",
    "ص": "w",
    "ث": "e",
    "ق": "r",
    "ف": "t",
    "غ": "y",
    "ع": "u",
    "ه": "i",
    "خ": "o",
    "ح": "p",
    "ج": "[",
    "چ": "]",
    "پ": "\\",
    "÷": "|",
    "ش": "a",
    "س": "s",
    "ی": "d",
    "ب": "f",
    "ل": "g",
    "ا": "h",
    "آ": "H",
    "ت": "j",
    "ن": "k",
    "م": "l",
    "ک": ";",
    "گ": "'",
    "ظ": "z",
    "ط": "x",
    "ز": "c",
    "ر": "v",
    "ذ": "b",
    "د": "n",
    "ئ": "m",
    "و": ",",
    "،": ".",
    "؟": "/"
  };

  function convertChar(char) {
    if (enToFa.hasOwnProperty(char)) {
      return enToFa[char];
    }
    if (faToEn.hasOwnProperty(char)) {
      return faToEn[char];
    }
    return char;
  }

  function convertText(text) {
    let result = "";
    for (let char of text) {
      result += convertChar(char);
    }
    return result;
  }

  function processElement(element) {
    if (typeof element.value !== "undefined") {
      element.value = convertText(element.value);
    } else {
      element.innerText = convertText(element.innerText);
    }
  }

  const inputSelectors = "input[type='text'], input[type='search'], input[type='email'], input[type='password'], textarea";
  const textInputs = document.querySelectorAll(inputSelectors);
  textInputs.forEach(function(elem) {
    processElement(elem);
  });

  const editableElements = document.querySelectorAll("[contenteditable='true']");
  editableElements.forEach(function(elem) {
    processElement(elem);
  });
})();

var ENGLISH_WORDS = [
    "third",
    "world",
     "noodle",
     "thought",
     "thrill",
     "which",
     "people",
     "cloud",
     "other",
     "theory",
    // "first",
    // "thing",
    // "those",
    // "woman",
    // "child",
    // "throw",
    // "after",
    // "shoulder",
    // "weird",
    // "school",
    // "still",
    // "three",
    // "state",
    // "never",
    // "become",
    // "really",
    // "family",
    // "leave",
    // "white",
    // "great",
    // "group",
    // "begin",
    // "worry",
    // "every",
    // "start",
    // "might",
    // "about",
    // "place",
    // "again",
    // "where",
    // "system",
    // "right",
    // "during",
    // "small",
    // "number",
    // "always",
    // "night",
    // "point",
    // "today",
];

function randomWord() {
  return ENGLISH_WORDS[Math.floor(Math.random() * ENGLISH_WORDS.length)];
}

export { randomWord };
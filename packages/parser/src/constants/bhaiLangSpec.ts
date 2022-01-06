export const SPEC = [
  // Whitespcaes
  { regex: /^\s+/, tokenType: null },

  // singke line Comments
  { regex: /^\/\/.*/, tokenType: null },

  // multi line comments
  { regex: /^\/\*[\s\S]*?\*\//, tokenType: null },

  // Symbols, delimiters
  { regex: /^;/, tokenType: ";" },
  { regex: /^\{/, tokenType: "{" },
  { regex: /^\}/, tokenType: "}" },
  { regex: /^\(/, tokenType: "(" },
  { regex: /^\)/, tokenType: ")" },
  { regex: /^,/, tokenType: "," },

  //Keywords
  { regex: /^\bhi bhai\b/, tokenType: "hi bhai" },
  { regex: /^\bbye bhai\b/, tokenType: "bye bhai" },
  { regex: /^\bbol bhai\b/, tokenType: "bol bhai" },
  { regex: /^\bhai bhai\b/, tokenType: "hai bhai" },
  { regex: /^\bye\b/, tokenType: "ye" },

  
  // Number
  { regex: /^\d+/, tokenType: "NUMBER" },

  // Identifier
  { regex: /^\w+/, tokenType: "IDENTIFIER" },

  // Assignment operators: =, *=, /=, +=, -=
  { regex: /^=/, tokenType: "SIMPLE_ASSIGN" },
  { regex: /^[\*\/\+\-]=/, tokenType: "COMPLEX_ASSIGN" },

  // operator
  { regex: /^[+\-]/, tokenType: "ADDITIVE_OPERATOR" },
  { regex: /^[*\/]/, tokenType: "MULTIPLICATIVE_OPERATOR" },

  // String
  { regex: /^"[^"]*"/, tokenType: "STRING" },
  { regex: /^'[^']*'/, tokenType: "STRING" },
];

export type Spec = typeof SPEC;

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
  { regex: /^\blet\b/, tokenType: "let" },

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

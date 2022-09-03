export const TokenTypes = {
  NULL_TYPE: null,

  HI_BHAI_TYPE: "hi bhai",

  BYE_BHAI_TYPE: "bye bhai",

  BOL_BHAI_TYPE: "bol bhai",

  BHAI_YE_HAI_TYPE: "bhai ye hai",

  AGAR_BHAI_TYPE: "agar bhai",

  WARNA_BHAI_TYPE: "warna bhai",

  NAHI_TO_BHAI_TYPE: "nahi to bhai",

  JAB_TAK_BHAI_TYPE: "jab tak bhai",

  BAS_KAR_BHAI_TYPE: "bas kar bhai",

  AGLA_DEKH_BHAI_TYPE: "agla dekh bhai",

  NALLA_TYPE: "NALLA",

  SEMI_COLON_TYPE: ";",

  OPEN_CURLY_BRACE_TYPE: "{",

  CLOSED_CURLY_BRACE_TYPE: "}",

  OPEN_PARENTHESIS_TYPE: "(",

  CLOSED_PARENTHESIS_TYPE: ")",

  COMMA_TYPE: ",",

  NUMBER_TYPE: "NUMBER",

  IDENTIFIER_TYPE: "IDENTIFIER",

  SIMPLE_ASSIGN_TYPE: "SIMPLE_ASSIGN",

  COMPLEX_ASSIGN_TYPE: "COMPLEX_ASSIGN",

  ADDITIVE_OPERATOR_TYPE: "ADDITIVE_OPERATOR",

  MULTIPLICATIVE_OPERATOR_TYPE: "MULTIPLICATIVE_OPERATOR",

  RELATIONAL_OPERATOR_TYPE: "RELATIONAL_OPERATOR",

  EQUALITY_OPERATOR_TYPE: "EQUALITY_OPERATOR",

  STRING_TYPE: "STRING",

  BOOLEAN_TYPE: "BOOLEAN",

  LOGICAL_AND_TYPE: "LOGICAL_AND",

  LOGICAL_OR_TYPE: "LOGICAL_OR",
};

export const SPEC = [
  // Whitespcaes
  { regex: /^\s+/, tokenType: TokenTypes.NULL_TYPE },

  // singke line Comments
  { regex: /^\/\/.*/, tokenType: TokenTypes.NULL_TYPE },

  // multi line comments
  { regex: /^\/\*[\s\S]*?\*\//, tokenType: TokenTypes.NULL_TYPE },

  // Symbols, delimiters
  { regex: /^;/, tokenType: TokenTypes.SEMI_COLON_TYPE },
  { regex: /^\{/, tokenType: TokenTypes.OPEN_CURLY_BRACE_TYPE },
  { regex: /^\}/, tokenType: TokenTypes.CLOSED_CURLY_BRACE_TYPE },
  { regex: /^\(/, tokenType: TokenTypes.OPEN_PARENTHESIS_TYPE },
  { regex: /^\)/, tokenType: TokenTypes.CLOSED_PARENTHESIS_TYPE },
  { regex: /^,/, tokenType: TokenTypes.COMMA_TYPE },

  //Keywords
  { regex: /^\bhi bhai\b/, tokenType: TokenTypes.HI_BHAI_TYPE },
  { regex: /^\bbye bhai\b/, tokenType: TokenTypes.BYE_BHAI_TYPE },
  { regex: /^\bbol bhai\b/, tokenType: TokenTypes.BOL_BHAI_TYPE },
  { regex: /^\bbhai ye hai\b/, tokenType: TokenTypes.BHAI_YE_HAI_TYPE },
  { regex: /^\bagar bhai\b/, tokenType: TokenTypes.AGAR_BHAI_TYPE },
  { regex: /^\bnahi to bhai\b/, tokenType: TokenTypes.NAHI_TO_BHAI_TYPE },
  { regex: /^\bwarna bhai\b/, tokenType: TokenTypes.WARNA_BHAI_TYPE },
  { regex: /^\bnalla\b/, tokenType: TokenTypes.NALLA_TYPE },
  { regex: /^\bjab tak bhai\b/, tokenType: TokenTypes.JAB_TAK_BHAI_TYPE },
  { regex: /^\bbas kar bhai\b/, tokenType: TokenTypes.BAS_KAR_BHAI_TYPE },
  { regex: /^\bagla dekh bhai\b/, tokenType: TokenTypes.AGLA_DEKH_BHAI_TYPE },

  // Number
  { regex: /^[+-]?([\d]*[.])?[\d]+/, tokenType: TokenTypes.NUMBER_TYPE },

  // Boolean
  { regex: /^\bsahi\b/, tokenType: TokenTypes.BOOLEAN_TYPE },
  { regex: /^\bgalat\b/, tokenType: TokenTypes.BOOLEAN_TYPE },

  // Identifier
  { regex: /^\w+/, tokenType: TokenTypes.IDENTIFIER_TYPE },

  // Equality operator: ==, !=
  {regex: /^[=!]=/, tokenType: TokenTypes.EQUALITY_OPERATOR_TYPE},

  // Assignment operators: =, *=, /=, +=, -=
  { regex: /^=/, tokenType: TokenTypes.SIMPLE_ASSIGN_TYPE },
  { regex: /^[\*\%\/\+\-]=/, tokenType: TokenTypes.COMPLEX_ASSIGN_TYPE },

  // operator
  { regex: /^[+\-]/, tokenType: TokenTypes.ADDITIVE_OPERATOR_TYPE },
  { regex: /^[*\/\%]/, tokenType: TokenTypes.MULTIPLICATIVE_OPERATOR_TYPE },
  {regex: /^[><]=?/, tokenType: TokenTypes.RELATIONAL_OPERATOR_TYPE},

  // logical operators: &&, ||
  {regex: /^&&/, tokenType: TokenTypes.LOGICAL_AND_TYPE},
  {regex: /^\|\|/, tokenType: TokenTypes.LOGICAL_OR_TYPE},

  // String
  { regex: /^"[^"]*"/, tokenType: TokenTypes.STRING_TYPE },
  { regex: /^'[^']*'/, tokenType: TokenTypes.STRING_TYPE },
];

export type Spec = typeof SPEC;

export const TokenTypes = {
  NULL_TYPE: null,

  HI_BHAI_TYPE: "வணக்கம் நண்பா",
  
  BYE_BHAI_TYPE: "நன்றி நண்பா",

  BOL_BHAI_TYPE: "சொல்லு நண்பா",

  BHAI_YE_HAI_TYPE: "இதான் நண்பா",

  AGAR_BHAI: "இப்படின்னா நண்பா",

  WARNA_BHAI: "அப்படி இல்லேன்னா",

  NAHI_TO_BHAI: "இல்ல ஒருவேளை",

  JAB_TAK_BHAI: "இதுவரைக்கும் சுத்து நண்பா",

  BAS_KAR_BHAI: "போதும் நண்பா",

  AGLA_DEKH_BHAI: "அடுத்தது நண்பா",

  NALLA_TYPE: "ஒன்னுமேயில்லை நண்பா",

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

  RELATIONAL_OPERATOR: "RELATIONAL_OPERATOR",

  EQUALITY_OPERATOR: "EQUALITY_OPERATOR",

  STRING_TYPE: "STRING",

  BOOLEAN_TYPE: "BOOLEAN",

  LOGICAL_AND: "LOGICAL_AND",

  LOGICAL_OR: "LOGICAL_OR"
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
  { regex: /^(?!\\S)வணக்கம் நண்பா(?!\\S)/u, tokenType: TokenTypes.HI_BHAI_TYPE },
  { regex: /^(?!\\S)நன்றி நண்பா(?!\\S)/u, tokenType: TokenTypes.BYE_BHAI_TYPE },
  { regex: /^(?!\\S)சொல்லு நண்பா(?!\\S)/u, tokenType: TokenTypes.BOL_BHAI_TYPE },
  { regex: /^(?!\\S)இதான் நண்பா(?!\\S)/u, tokenType: TokenTypes.BHAI_YE_HAI_TYPE },
  { regex: /^(?!\\S)இப்படின்னா நண்பா(?!\\S)/u, tokenType: TokenTypes.AGAR_BHAI },
  { regex: /^(?!\\S)இல்ல ஒருவேளை(?!\\S)/u, tokenType: TokenTypes.NAHI_TO_BHAI },
  { regex: /^(?!\\S)அப்படி இல்லேன்னா(?!\\S)/u, tokenType: TokenTypes.WARNA_BHAI },
  { regex: /^(?!\\S)ஒன்னுமேயில்லை நண்பா(?!\\S)/u, tokenType: TokenTypes.NALLA_TYPE },
  { regex: /^(?!\\S)இதுவரைக்கும் சுத்து நண்பா(?!\\S)/u, tokenType: TokenTypes.JAB_TAK_BHAI },
  { regex: /^(?!\\S)போதும் நண்பா(?!\\S)/u, tokenType: TokenTypes.BAS_KAR_BHAI },
  { regex: /^(?!\\S)அடுத்தது நண்பா(?!\\S)/u, tokenType: TokenTypes.AGLA_DEKH_BHAI },

  // Number
  { regex: /^-?\d+/, tokenType: TokenTypes.NUMBER_TYPE },

  // Boolean
  { regex: /^\bsahi\b/, tokenType: TokenTypes.BOOLEAN_TYPE },
  { regex: /^\bgalat\b/, tokenType: TokenTypes.BOOLEAN_TYPE },

  // Identifier
  { regex: /^[\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}]+/u, tokenType: TokenTypes.IDENTIFIER_TYPE },
  //{ regex: /^\w+/, tokenType: TokenTypes.IDENTIFIER_TYPE },


  // Equality operator: ==, !=
  {regex: /^[=!]=/, tokenType: TokenTypes.EQUALITY_OPERATOR},

  // Assignment operators: =, *=, /=, +=, -=
  { regex: /^=/, tokenType: TokenTypes.SIMPLE_ASSIGN_TYPE },
  { regex: /^[\*\%\/\+\-]=/, tokenType: TokenTypes.COMPLEX_ASSIGN_TYPE },

  // operator
  { regex: /^[+\-]/, tokenType: TokenTypes.ADDITIVE_OPERATOR_TYPE },
  { regex: /^[*\/\%]/, tokenType: TokenTypes.MULTIPLICATIVE_OPERATOR_TYPE },
  {regex: /^[><]=?/, tokenType: TokenTypes.RELATIONAL_OPERATOR},

  // logical operators: &&, ||
  {regex: /^&&/, tokenType: TokenTypes.LOGICAL_AND},
  {regex: /^\|\|/, tokenType: TokenTypes.LOGICAL_OR},

  // String
  { regex: /^"[^"]*"/, tokenType: TokenTypes.STRING_TYPE },
  { regex: /^'[^']*'/, tokenType: TokenTypes.STRING_TYPE },
];

export type Spec = typeof SPEC;

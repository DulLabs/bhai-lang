import Prism, { languages } from "prismjs";


export const bhaiLangSyntax = languages.extend('clike', {
  comment: [
    {
      pattern: /^\/\/.*/
    },
    {
      pattern: /^\/\*[\s\S]*?\*\//,
      lookbehind: true,
      greedy: true
    }
  ],
  string: {
    pattern: /(["'])((?:\\\1|(?:(?!\1)).)*)(\1)/,
    greedy: true
  },
  keyword:
    /\b(?:hi bhai|bye bhai|bol bhai|bhai ye hai)\b/,
  boolean: /\b(?:sahi|galat)\b/,
  number: /(?:(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
  operator:
    /[*/%^!=]=?|~|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./
})

Prism.languages.bhaiLang = bhaiLangSyntax

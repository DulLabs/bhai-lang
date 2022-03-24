import Prism, { languages } from "prismjs";


export const bhaiLangSyntax = languages.extend("clike", {
  comment: [
    {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: true,
      greedy: true,
    },
    {
      pattern: /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/,
      lookbehind: true,
      greedy: true,
    },
  ],
  string: {
    pattern: /(["'])((?:\\\1|(?:(?!\1)).)*)(\1)/,
    greedy: true,
  },
  //keyword: /\b(?:வணக்கம் nanba|நன்றி நண்பா|சொல்லு நண்பா|இதான் நண்பா|ஒன்னுமேயில்லை நண்பா|இப்படின்னா நண்பா|இல்ல ஒருவேளை|அப்படி இல்லேன்னா|இதுவரைக்கும் சுத்து நண்பா|போதும் நண்பா|அடுத்தது நண்பா)\b/u,
  keyword: /(?!\\S)(?:வணக்கம் நண்பா|நன்றி நண்பா|சொல்லு நண்பா|இதான் நண்பா|ஒன்னுமேயில்லை நண்பா|இப்படின்னா நண்பா|இல்ல ஒருவேளை|அப்படி இல்லேன்னா|இதுவரைக்கும் சுத்து நண்பா|போதும் நண்பா|அடுத்தது நண்பா)(?!\\S)/u,
  boolean: /\b(?:sahi|galat)\b/,
  number: /(?:(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
  operator:
    /[*/%^!=]=?|~|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
});

Prism.languages.bhaiLang = bhaiLangSyntax;

import BhaiLangModule from './src/module/bhaiLangModule';


const parser = BhaiLangModule.getParser();
console.log(JSON.stringify(parser.parse(`
hi bhai
 bye bhai`)));

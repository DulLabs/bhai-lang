import BhaiLangModule from './module/bhaiLangModule';


const parser = BhaiLangModule.getParser();
console.log(JSON.stringify(parser.parse(`
hi bhai
 bye bhai`)));

export default parser;

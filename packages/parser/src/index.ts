import BhaiLangModule from "./module/bhaiLangModule";

const parser = BhaiLangModule.getParser();
console.log(
  JSON.stringify(
    parser.parse(`
    hi bhai
    a *= 4;
    bye bhai`)
  )
);

export { NodeType } from "./constants/constants";
export default parser;

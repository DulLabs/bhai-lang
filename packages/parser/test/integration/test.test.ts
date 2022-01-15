import bhaiLangModule from '../../src/module/bhaiLangModule';

import { Tests } from './test_helper';


Tests.forEach(testCase => { 
  test(testCase.name, () => { 
    const parser = bhaiLangModule.getParser();
    const ast = parser.parse(testCase.input);
    expect(JSON.stringify(ast)).toBe(testCase.output);
  }
    )
})

import { Tokenizer } from "../../src/components/tokenizer/types";
import { bhaiLangContainer } from "../../src/container/inversify.config";
import { TYPES } from "../../src/container/types";

const tokenizer = bhaiLangContainer.get<Tokenizer>(TYPES.Tokenizer)

test("test Tokenizer.getNextToken", () => {
  tokenizer.initTokenizer(`"hello"`);

  expect(tokenizer.getNextToken()).toStrictEqual({
    type: "STRING",
    value: '"hello"',
  });
});

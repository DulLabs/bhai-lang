import { Tokenizer } from "../../src/components/tokenizer/types"
import { bhaiLangContainer } from "../../src/container/inversify.config"
import { TYPES } from "../../src/container/types"

test('Test tokenizer impl', () => {

    var tokenizer = bhaiLangContainer.get<Tokenizer>(TYPES.Tokenizer)

    expect(tokenizer).not.toBeNull()

});
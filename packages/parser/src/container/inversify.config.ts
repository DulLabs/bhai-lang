import "reflect-metadata";
import { Container } from 'inversify';

import TokenizerImpl from '../components/tokenizer';
import { Tokenizer } from '../components/tokenizer/types';
import { TYPES } from './types';
import { Spec, SPEC } from "../constants/bhaiLangSpec";


const bhaiLangContainer = new Container();

bhaiLangContainer.bind<Tokenizer>(TYPES.Tokenizer).to(TokenizerImpl);
bhaiLangContainer.bind<Spec>(TYPES.Spec).toConstantValue(SPEC);

export { bhaiLangContainer };
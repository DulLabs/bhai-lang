import Statement from ".";

import { TokenTypes } from "../../../constants/didiLangSpec";
import { NodeType } from "../../../constants/constants";
import { ASTNode } from "../types/nodeTypes";


export default class BreakStatement extends Statement {
    getStatement(): ASTNode {
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.BAS_KAR_didi);

        return {
            type: NodeType.BreakStatement
        }
    }
}
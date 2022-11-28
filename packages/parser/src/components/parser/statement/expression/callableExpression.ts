import Expression from ".";

import { TokenTypes } from "../../../../constants/bhaiLangSpec";
import { NodeType } from "../../../../constants/constants";
import { ASTNode } from "../../types/nodeTypes";

export default class CallableExpression extends Expression {
	getExpression(): ASTNode {
		const name = this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CALLABLE_TYPE).value;
		this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_PARENTHESIS_TYPE);

		// read arguments
		let args: any[] = [];
		if(this._tokenExecutor.getLookahead()?.type !== TokenTypes.CLOSED_PARENTHESIS_TYPE) {
			do {
				args.push(this._getArgs());
			} while (
				this._tokenExecutor.getLookahead()?.type === TokenTypes.COMMA_TYPE && 
				this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COMMA_TYPE)
			);
		}
		
		this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_PARENTHESIS_TYPE);
		return {
			type: NodeType.CallableExpression,
			name,
			args,
		};
	}
	private _getArgs() {
		return Expression.getExpressionImpl(NodeType.AssignmentExpression).getExpression();
	}
}

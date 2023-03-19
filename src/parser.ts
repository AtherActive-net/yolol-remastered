import { Token } from "@core/lib/Token";
import { TokenType, types } from "./lib/utilities";
import {error, suggestions} from "@core/lib/error"

import {
    Expression,
    Variable,
    Type,
    Literal,
} from "@core/syntax"

export class Parser {
    public position = -1;
    public tokens: Array<Token>;
    public previousToken: Token;

    public tree: Array<Expression> = [];

    constructor(tokens: Array<Token>) {
        this.tokens = tokens;
    }

    private advance(count=1) {
        this.position += count;
        const tok = this.tokens[this.position];
        this.previousToken = this.tokens[this.position - count];
        return tok;
    }

    private lookAhead(count:number=1) {
        return this.tokens[this.position + count];
    }

    private lookBack(count:number=1) {
        return this.tokens[this.position - count];
    }

    private error(tok:Token, message:string,suggestion?:string) {
        const err = new Error('')
        console.log(`
    Error at line ${tok.line}: 
    ${message}
    ${suggestion ? suggestion : ''}
        `);
        process.exit(1);
    }

    private match(...types: Array<string>) {
        for (const type of types) {
            if (this.check(type)) {
                this.advance();
                return true;
            }
        }
        return false;
    }

    private check(type: string) {
        if (this.isAtEnd()) return false;
        return this.lookAhead().type === type;
    }

    private isAtEnd() {
        return this.lookAhead().type === "EOF";
    }


    public parse() {
        while (!this.isAtEnd()) {
            console.log('pulse')
            this.tree.push(this.expression(this.advance()))
        }
    }

    public expression(token:Token):Expression {

        switch(token.type) {
            case TokenType.COLON: {
                if(this.lookAhead(1).type !== TokenType.IDENTIFIER) this.error(
                    this.lookAhead(),error.columNotFollowedByIdentifier(this.lookAhead()),
                    suggestions.columNotFollowedByIdentifier)
                
                return this.identifier(this.advance());
                break;
            }

            case TokenType.STRING: {
                return new Literal(token);
                break;
            }

            case TokenType.LESS: {
                if(types.includes(this.lookAhead().type)) {
                    const type = this.type(this.advance());
                    console.log(this.lookAhead(2))
                    if(this.lookAhead(2).type === TokenType.IDENTIFIER) {
                        const variable = this.identifier(this.advance(2), type)
                        return variable;
                    }
                }
            }
        }

        return
    }

    public identifier(token:Token, type?:Type) {
        const name = token;
        const identifierType = type !== undefined ? type : this.type(this.advance(2));
        if(this.lookAhead(1).type == TokenType.EQUAL) {
            this.advance();
            const value = this.expression(this.advance());
            return new Variable(name,value,identifierType);
        } else {
            this.error(token,`Expected a value after the type declaration.`)
        }
        return
    }


    public type(type:Token) {
        console.log(type)
        if(type.type != TokenType.STRING_TYPE && type.type != TokenType.NUMBER_TYPE && type.type != TokenType.BOOLEAN) {
            this.error(type,`Type ${type.lexeme} is not a valid type.`);
        }
        return new Type(type);
    }
    
}
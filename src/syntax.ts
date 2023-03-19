import { Token } from "@core/lib/Token";

export class Expression {
    constructor() {}
}

export class Literal extends Expression {
    constructor(public value: any) {
        super();
    }
}

export class Type extends Expression {
    constructor(public name: Token) {
        super();
    }
}

export class BinaryExpression extends Expression {
    constructor(public left: Expression, public operator: Token, public right: Expression) {
        super();
    }
}

export class GroupingExpression extends Expression {
    constructor(public expression: Expression) {
        super();
    }
}

export class Variable extends Expression {
    constructor(
        public name: Token,
        public value: Expression,
        public type: Type,
        public isConst:boolean = false
        ) {
        super();
    }
}

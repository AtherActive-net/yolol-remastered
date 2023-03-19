
export enum TokenType {
    LEFT_PAREN = "(",
    RIGHT_PAREN = ")",
    LEFT_BRACE = "{",
    RIGHT_BRACE = "}",
    LEFT_BRACKET = "[",
    RIGHT_BRACKET = "]",

    COMMA = ",",
    DOT = ".",
    MINUS = "-",
    PLUS = "+",
    SEMICOLON = ";",
    COLON = ":",
    SLASH = "/",
    DOUBLEDASH = "//",
    STAR = "*",

    BANG = "!",
    BANG_EQUAL = "!=",
    EQUAL = "=",
    EQUAL_EQUAL = "==",
    GREATER = ">",
    GREATER_EQUAL = ">=",
    LESS = "<",
    LESS_EQUAL = "<=",
    AND = "&&",

    STRING = "str",
    NUMBER = "number",
    BOOLEAN = "bool",

    STRING_TYPE = "STR",
    NUMBER_TYPE = "NUMBER",
    BOOLEAN_TYPE = "BOOl",

    IDENTIFIER = "IDENTIFIER",
    RETURN = "RETURN",
    
    FUNCTION = 'FUNCTION',

    ELSE = "else",
    FALSE = "false",
    FOR = "for",
    FUN = "fun",
    IF = "if",
    NIL = "nil",
    OR = "||",
    PRINT = "print",
    SUPER = "super",
    THIS = "this",
    TRUE = "true",
    VAR = "var",
    WHILE = "while",
    END = "END",
    THEN = "THEN",

    EOF = "EOF",
    COMMENT = "#",
    CLEAR = 'CLEAR',

    META = "meta",
    SCRIPT = "script"
}

export const types = [
    TokenType.STRING_TYPE,
    TokenType.NUMBER_TYPE,
    TokenType.BOOLEAN,
]

export const validOperationTypes = [
    TokenType.NUMBER
]

export const operators = [
    TokenType.PLUS,
    TokenType.MINUS,
    TokenType.STAR,
    TokenType.SLASH,
]

export const binaryOperators = [
    TokenType.EQUAL_EQUAL,
    TokenType.BANG_EQUAL,
    TokenType.GREATER,
    TokenType.GREATER_EQUAL,
    TokenType.LESS,
    TokenType.LESS_EQUAL,
]

// set up the basic keywords
export const reservedKeywords = new Map([
    ['else', TokenType.ELSE],
    ['false', TokenType.FALSE],
    ['for', TokenType.FOR],
    ['fun', TokenType.FUN],
    ['if', TokenType.IF],
    ['nil', TokenType.NIL],
    ['or', TokenType.OR],
    ['return', TokenType.RETURN],
    ['super', TokenType.SUPER],
    ['this', TokenType.THIS],
    ['true', TokenType.TRUE],
    ['while', TokenType.WHILE],

    ['end', TokenType.END],
    ['then', TokenType.THEN],

    // Variable type keywords
    ['number', TokenType.NUMBER_TYPE],
    ['string', TokenType.STRING_TYPE],
    ['boolean', TokenType.BOOLEAN_TYPE],

    ['true', TokenType.TRUE],
    ['false', TokenType.FALSE],

    // Other
    ['meta', TokenType.META],
    
    // STLib Keywords
    ['output', TokenType.PRINT],
    ['clear', TokenType.CLEAR]
])
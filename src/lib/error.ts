import {Token} from "@core/lib/Token"

export const error = {
    variableTypeError: (name:string, type:string, typeError:string) => `Variable ${name} type is ${type}, but got ${typeError}`,
    variableDefinedError: (name:string) => `Variable ${name} is already defined`,
    operationNotSupportedType: (valueType:string) => `${valueType} is not valid for this operation.`,
    columNotFollowedByIdentifier: (token:Token) => `Expected an identifier after the colon, but got ${token.type}`,

}

export const suggestions = {
    operationNotSupportedType: `You likely are using a value that cannot be 'just' added with regular operators, like a string.`,
    divisionAssignedToInteger: `Assigning a divided value to an integer is impossible, as it could contain decimal values. Assign to a flt instead.`,
    variableTypeError: `You likely attempted to assign a value with a type that does not match.`,
    columNotFollowedByIdentifier: `You likely forgot to add an identifier after the colon or tried to do something unsupported.`,
}
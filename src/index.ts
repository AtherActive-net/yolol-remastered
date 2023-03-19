
import fs from 'fs'
import { Lexer } from '@core/lexer'
import { Parser } from '@core/parser'

const input = fs.readFileSync('/workspaces/yolol-remastered/test/main.yolol', 'utf8')

export class YololEngine {

    constructor(private input: string,private enableAdditionalDebug:boolean = false) {}
    
    public run() {
        this.enableAdditionalDebug ? console.time('Lexer Time') : null;
        const lex = new Lexer(this.input);
        this.enableAdditionalDebug ? console.timeEnd('Lexer Time') : null;
        // console.log(lex.tokens)


        const parser = new Parser(lex.tokens);
        parser.parse();

        console.log(parser)

        console.log("Keeping debugger running for 100s")
        setTimeout(() => {}, 100000)
    }
}

const intepreter = new YololEngine(input,true)
intepreter.run();
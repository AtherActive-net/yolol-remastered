
import fs from 'fs'
import { Lexer } from '@core/lexer'

const input = fs.readFileSync('/workspaces/yolol-remastered/test/main.yolol', 'utf8')

export class YololEngine {

    constructor(private input: string,private enableAdditionalDebug:boolean = false) {}
    
    public run() {
        this.enableAdditionalDebug ? console.time('Lexer Time') : null;
        const lex = new Lexer(this.input);
        this.enableAdditionalDebug ? console.timeEnd('Lexer Time') : null;
        console.log(lex.tokens)

    }
}

const intepreter = new YololEngine(input,true)
intepreter.run();
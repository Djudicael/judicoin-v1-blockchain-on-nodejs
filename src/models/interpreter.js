const STOP = 'STOP';
const ADD = 'ADD';
const PUSH = 'PUSH';
const code = [PUSH, 2, PUSH, 3, ADD, STOP];

export default class Interpreter {
    constructor() {
        this.state = {
            programCounter: 0,
            stack: [],
            code: []
        }
    }
    runCode(code) {
        this.state.code = code;

        while (this.state.programCounter < this.state.code.length) {
            const opCode = this.state.code[this.state.programCounter];
            this.state.programCounter++;
        }
    }

}
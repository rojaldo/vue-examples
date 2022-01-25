const INIT_STATE = 0;
const FIRST_FIGURE_STATE = 1;
const SECOND_FIGURE_STATE = 2;
const RESULT_STATE = 3;

export class CalculatorEngine {

    constructor() {
        this.currentState = INIT_STATE;
        this.firstFigure = 0;
        this.secondFigure = 0;
        this.result = 0;
        this.operator = '';
        this.display = '';
    }

    handleNumber(value) {
        switch (this.currentState) {
            case INIT_STATE:
                this.display += value;
                this.firstFigure = value;
                this.currentState = FIRST_FIGURE_STATE;
                break;
            case FIRST_FIGURE_STATE:
                this.display += value;
                this.firstFigure = this.firstFigure * 10 + value;
                break;
            case SECOND_FIGURE_STATE:
                this.display += value;
                this.secondFigure = this.secondFigure * 10 + value;
                break;
            case RESULT_STATE:
                this.display = '' + value;
                this.firstFigure = value;
                this.secondFigure = 0;
                this.result = 0;
                this.operator = '';
                this.currentState = FIRST_FIGURE_STATE;
                break;
            default:
                break;
        }

        return this.display;
    }

    handleSymbol(value) {
        switch (this.currentState) {
            case INIT_STATE:
                break;
            case FIRST_FIGURE_STATE:
                if (value === '+' || value === '-' || value === '*' || value === '/') {
                    this.display += value;
                    this.operator = value;
                    this.currentState = SECOND_FIGURE_STATE;
                }
                break;
            case SECOND_FIGURE_STATE:
                if (value === '=') {
                    this.result = this.getResult();
                    this.display += value + this.result;
                    this.currentState = RESULT_STATE;
                }
                break;
            case RESULT_STATE:
                if (value === '+' || value === '-' || value === '*' || value === '/') {
                    this.firstFigure = this.result;
                    this.secondFigure = 0;
                    this.result = 0;
                    this.operator = value;
                    this.display = this.firstFigure + this.operator;
                    this.currentState = SECOND_FIGURE_STATE;
                }
                break;
            default:
                break;
        }
        return this.display;
    }

    getResult() {
        switch (this.operator) {
            case '+':
                return this.firstFigure + this.secondFigure;
            case '-':
                return this.firstFigure - this.secondFigure;
            case '*':
                return this.firstFigure * this.secondFigure;
            case '/':
                return this.firstFigure / this.secondFigure;
            default:
                break;
        }
    }

}
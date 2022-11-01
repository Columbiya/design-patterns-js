enum Operations {
    ADD,
    SUBSTRACT,
    DIVIDE,
    MULTIPLY
}

class OldCalculator {
    operations(t1: number, t2: number, operation: Operations) {
        switch(operation) {
            case Operations.ADD:
                return t1 + t2
            case Operations.SUBSTRACT:
                return t1 - t2;
            case Operations.DIVIDE:
                return t1 / t2
            case Operations.MULTIPLY:
                return t1 * t2
            default: return NaN //в js NaN является типом number :))))
        }
    }
}

class NewCalc {
    add(t1: number, t2: number) {
        return t1 + t2
    }

    substract(t1: number, t2: number) {
        return t1 - t2
    }

    divide(t1: number, t2: number) {
        return t1 / t2
    }

    multiply(t1: number, t2: number) {
        return t1 * t2
    }
}

class CalcAdapter { //очень часто используется с API. Если есть старая и новая версия API
    calc: NewCalc

    constructor() {
        this.calc = new NewCalc()
        
    }

    operations(t1: number, t2: number, operation) {
        switch(operation) {
            case Operations.ADD:
                return this.calc.add(t1, t2) //интерфейс уже новый
            case Operations.SUBSTRACT:
                return this.calc.substract(t1, t2)
            case Operations.DIVIDE:
                return this.calc.divide(t1, t2)
            case Operations.MULTIPLY:
                return this.calc.multiply(t1, t2)
            default: return NaN //в js NaN является типом number :))))
        }
    }
}

const oldCalc = new OldCalculator()
console.log(oldCalc.operations(10, 5, Operations.ADD));

const newCalc = new NewCalc()
console.log(newCalc.add(10, 5))

const adapter = new CalcAdapter()
console.log(adapter.calc.add(10, 5))
console.log(adapter.operations(10, 5, Operations.ADD))

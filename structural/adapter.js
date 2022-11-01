var Operations;
(function (Operations) {
    Operations[Operations["ADD"] = 0] = "ADD";
    Operations[Operations["SUBSTRACT"] = 1] = "SUBSTRACT";
    Operations[Operations["DIVIDE"] = 2] = "DIVIDE";
    Operations[Operations["MULTIPLY"] = 3] = "MULTIPLY";
})(Operations || (Operations = {}));
var OldCalculator = /** @class */ (function () {
    function OldCalculator() {
    }
    OldCalculator.prototype.operations = function (t1, t2, operation) {
        switch (operation) {
            case Operations.ADD:
                return t1 + t2;
            case Operations.SUBSTRACT:
                return t1 - t2;
            case Operations.DIVIDE:
                return t1 / t2;
            case Operations.MULTIPLY:
                return t1 * t2;
            default: return NaN; //в js NaN является типом number :))))
        }
    };
    return OldCalculator;
}());
var NewCalc = /** @class */ (function () {
    function NewCalc() {
    }
    NewCalc.prototype.add = function (t1, t2) {
        return t1 + t2;
    };
    NewCalc.prototype.substract = function (t1, t2) {
        return t1 - t2;
    };
    NewCalc.prototype.divide = function (t1, t2) {
        return t1 / t2;
    };
    NewCalc.prototype.multiply = function (t1, t2) {
        return t1 * t2;
    };
    return NewCalc;
}());
var CalcAdapter = /** @class */ (function () {
    function CalcAdapter() {
        this.calc = new NewCalc();
    }
    CalcAdapter.prototype.operations = function (t1, t2, operation) {
        switch (operation) {
            case Operations.ADD:
                return this.calc.add(t1, t2);
            case Operations.SUBSTRACT:
                return this.calc.substract(t1, t2);
            case Operations.DIVIDE:
                return this.calc.divide(t1, t2);
            case Operations.MULTIPLY:
                return this.calc.multiply(t1, t2);
            default: return NaN; //в js NaN является типом number :))))
        }
    };
    return CalcAdapter;
}());
var oldCalc = new OldCalculator();
console.log(oldCalc.operations(10, 5, Operations.ADD));
var newCalc = new NewCalc();
console.log(newCalc.add(10, 5));
var adapter = new CalcAdapter();
console.log(adapter.calc.add(10, 5));
console.log(adapter.operations(10, 5, Operations.ADD));

var MyMath = /** @class */ (function () {
    function MyMath(initialValue) {
        if (initialValue === void 0) { initialValue = 0; }
        this.number = initialValue;
    }
    MyMath.prototype.square = function () {
        return Math.pow(this.number, 2);
    };
    MyMath.prototype.cube = function () {
        return Math.pow(this.number, 3);
    };
    return MyMath;
}());
var Command = /** @class */ (function () {
    function Command(subject) {
        this.subject = subject;
        this.commandsExecuted = [];
    }
    Command.prototype.execute = function (command) {
        this.commandsExecuted.push(command);
        return this.subject[command]();
    };
    return Command;
}());
var x = new Command(new MyMath(2));
console.log(x.execute('square'));
console.log(x.execute('cube'));
console.log(x.commandsExecuted);

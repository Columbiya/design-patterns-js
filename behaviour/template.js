var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.responsibilities = function () { };
    Employee.prototype.work = function () {
        return "".concat(this.name, " is working on ").concat(this.responsibilities());
    };
    Employee.prototype.getPaid = function () {
        return "".concat(this.name, " makes ").concat(this.salary, " a year");
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, salary) {
        return _super.call(this, name, salary) || this;
    }
    Developer.prototype.responsibilities = function () {
        return "\u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C";
    };
    return Developer;
}(Employee));
var Tester = /** @class */ (function (_super) {
    __extends(Tester, _super);
    function Tester(name, salary) {
        return _super.call(this, name, salary) || this;
    }
    Tester.prototype.responsibilities = function () {
        return "\u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C";
    };
    return Tester;
}(Employee));
var dev = new Developer("me", 100000);
console.log(dev.getPaid());
console.log(dev.work());
var tester = new Tester("noone", 90000);
console.log(tester.getPaid());
console.log(tester.work());

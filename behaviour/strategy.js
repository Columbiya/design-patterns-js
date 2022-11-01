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
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.travelTime = function () {
        return this.timeTaken;
    };
    return Vehicle;
}());
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus() {
        var _this = _super.call(this) || this;
        _this.timeTaken = 10;
        return _this;
    }
    return Bus;
}(Vehicle));
var Taxi = /** @class */ (function (_super) {
    __extends(Taxi, _super);
    function Taxi() {
        var _this = _super.call(this) || this;
        _this.timeTaken = 5;
        return _this;
    }
    return Taxi;
}(Vehicle));
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this = _super.call(this) || this;
        _this.timeTaken = 3;
        return _this;
    }
    return Car;
}(Vehicle));
var Commute = /** @class */ (function () {
    function Commute() {
    }
    Commute.prototype.travel = function (transport) {
        return transport.travelTime();
    };
    return Commute;
}());
var commute = new Commute();
console.log(commute.travel(new Taxi()));
console.log(commute.travel(new Bus()));
console.log(commute.travel(new Car()));

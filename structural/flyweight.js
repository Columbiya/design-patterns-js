var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    return Car;
}());
var CarFactory = /** @class */ (function () {
    function CarFactory() {
        this.cars = [];
        this.cars = [];
    }
    CarFactory.prototype.create = function (model, price) {
        var candidate = this.getCar(model);
        if (candidate) { //кэширование и проверка, есть ли такая машина в эррее
            return candidate;
        }
        var newCar = new Car(model, price);
        this.cars.push(newCar);
        return newCar;
    };
    CarFactory.prototype.getCar = function (model) {
        return this.cars.find(function (car) { return car.model === model; });
    };
    return CarFactory;
}());
var factory = new CarFactory();
var bmwX6 = factory.create('bmv', 10000);
console.log(bmwX6);
var anotherBmwx6 = factory.create('bmv', 25000);
console.log(anotherBmwx6);

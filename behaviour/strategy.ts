class Vehicle {
    timeTaken: number

    travelTime() {
        return this.timeTaken
    }
}

class Bus extends Vehicle { // одна стратегия - поехать на автобусе
    constructor() {
        super()
        this.timeTaken = 10
    }
}

class Taxi extends Vehicle { // вторая стратегия - поехать на такси
    constructor() {
        super()
        this.timeTaken = 5
    }
}

class Car extends Vehicle { // третья стратегия - поехать на машине
    constructor() {
        super()
        this.timeTaken = 3
    }
}

class Commute {
    travel(transport: Vehicle) {
        return transport.travelTime()
    }
}

const commute = new Commute()
console.log(commute.travel(new Taxi()));
console.log(commute.travel(new Bus()));
console.log(commute.travel(new Car()));

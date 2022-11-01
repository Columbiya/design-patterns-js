class Car {
    model: string
    price: number
    
    constructor(model: string, price: number)  {
        this.model = model
        this.price = price
    }
}

class CarFactory {
    cars: Car[] = []

    constructor() {
        this.cars = []
    }

    create(model: string, price: number) {
        const candidate = this.getCar(model)

        if (candidate) { //кэширование и проверка, есть ли такая машина в эррее
            return candidate
        }

        const newCar = new Car(model, price)
        this.cars.push(newCar)
        return newCar
    }

    getCar(model: string) {
        return this.cars.find(car => car.model === model)
    }
}

const factory = new CarFactory()
const bmwX6 = factory.create('bmv', 10000)
console.log(bmwX6)
const anotherBmwx6 = factory.create('bmv', 25000)
console.log(anotherBmwx6)
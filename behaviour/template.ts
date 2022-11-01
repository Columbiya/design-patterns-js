abstract class Employee {
    name: string
    salary: number

    constructor(name: string, salary: number) {
        this.name = name
        this.salary = salary
    }

    responsibilities() {}

    work() {
        return `${this.name} is working on ${this.responsibilities()}`
    }

    getPaid() {
        return `${this.name} makes ${this.salary} a year`
    }
}

class Developer extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary)
    }

    responsibilities(): string {
        return `процесс создания программ`
    }
}

class Tester extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary)
    }

    responsibilities(): string {
        return `процесс тестирования программ`
    }
}

const dev = new Developer("me", 100000)
console.log(dev.getPaid());
console.log(dev.work());

const tester = new Tester("noone", 90000) 
console.log(tester.getPaid());
console.log(tester.work());

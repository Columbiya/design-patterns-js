class MyMath {
    number: number

    constructor(initialValue = 0) {
        this.number = initialValue
    }

    square() {
        return this.number ** 2
    }

    cube() {
        return this.number ** 3
    }
}

class Command {
    subject: any
    commandsExecuted: any[]

    constructor(subject) {
        this.subject = subject
        this.commandsExecuted = []
    }

    execute(command: string) {
        this.commandsExecuted.push(command)
        return this.subject[command]()
    }
}

const x = new Command(new MyMath(2))

console.log(x.execute('square'))
console.log(x.execute('cube'))
console.log(x.commandsExecuted)
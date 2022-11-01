class MyIterator {
    index = 0
    data: any[]

    constructor(data) {
        this.data = data
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                }
                else {
                    this.index = 0

                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}

function* generator(collection: any[]) {
    let index = 0

    while (index < collection.length) {
        yield collection[index++]
    }
}

const iterator = new MyIterator(['this', 'is', 'iterator'])
const gen = generator(['this', 'is', 'iterator'])

for (const val of gen) { //генератор можно засовывать в цикл for of
    console.log(val)
}


// for (const value of iterator) {
//     console.log(value)
// }

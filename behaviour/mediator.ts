class User {
    name: string
    room: any

    constructor(name: string) {
        this.name = name
        this.room = null
    }

    send(message: string, to?: User) {
        this.room.send(message, this, to)
    }

    receive(message: string, from: User) {
        console.log(`from ${from.name} => ${this.name}: ${message}`);
    }
}

class ChatRoom {
    users: any

    constructor() {
        this.users = {}
    }

    register(user: User) {
        this.users[user.name] = user
        user.room = this // вот это связка медиатора
    }

    send(message: string, from: User, to: User) {
        if (to) {
            to.receive(message, from)
        }
        else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from)
                }
            })
        }
    }
}


const u1 = new User("user1")
const u2 = new User("vova")
const u3 = new User("Egor")

const room = new ChatRoom()
room.register(u1)
room.register(u2)
room.register(u3)

u1.send("hello", u2)
u1.send("to everyone")
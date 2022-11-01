// function Server(name: string, ip: string) { //фукнция - конструктор
//     this.name = name
//     this.ip = ip
// }

// Server.prototype.getUrl = function() {
//     return `https://${this.ip}:80`
// } //es5

class Server {
    name: string
    ip: string

    constructor(name: string, ip: string) {
        this.name = name
        this.ip = ip
    }

    getUrl(): string {
        return `https://${this.ip}:80`
    }
}

const aws = new Server("aws", "82.21.21.32")
console.log(aws.getUrl())

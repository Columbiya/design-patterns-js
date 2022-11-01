class Database {
    static instance: Database
    static exists: boolean = false
    private data: any

    constructor(data: any) {
        if (Database.exists) {
            return Database.instance //если уже есть какой то инстанс классса вот этого, то вернется он
        }

        Database.instance = this
        Database.exists = true
        this.data = data
    }

    getData() {
        return this.data
    }
} 

const mongo = new Database("MONGOOO LETS GOOO")
console.log(mongo.getData())

const anotherMongo = new Database("another mongo won't be created!") // не будет создано, потому что уже есть инстанс этого класса
console.log(anotherMongo.getData())
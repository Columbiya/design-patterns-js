var Database = /** @class */ (function () {
    function Database(data) {
        if (Database.exists) {
            return Database.instance; //если уже есть какой то инстанс классса вот этого, то вернется он
        }
        Database.instance = this;
        Database.exists = true;
        this.data = data;
    }
    Database.prototype.getData = function () {
        return this.data;
    };
    Database.exists = false;
    return Database;
}());
var mongo = new Database("MONGOOO LETS GOOO");
console.log(mongo.getData());
var anotherMongo = new Database("another mongo won't be created!");
console.log(anotherMongo.getData());

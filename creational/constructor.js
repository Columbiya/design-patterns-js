// function Server(name: string, ip: string) { //фукнция - конструктор
//     this.name = name
//     this.ip = ip
// }
// Server.prototype.getUrl = function() {
//     return `https://${this.ip}:80`
// } //es5
var Server = /** @class */ (function () {
    function Server(name, ip) {
        this.name = name;
        this.ip = ip;
    }
    Server.prototype.getUrl = function () {
        return "https://".concat(this.ip, ":80");
    };
    return Server;
}());
var aws = new Server("aws", "82.21.21.32");
console.log(aws.getUrl());

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AwsServer = /** @class */ (function () {
    function AwsServer() {
    }
    return AwsServer;
}());
var Server = /** @class */ (function (_super) {
    __extends(Server, _super);
    function Server(ip, port) {
        var _this = _super.call(this) || this;
        _this.ip = ip;
        _this.port = port;
        return _this;
    }
    Object.defineProperty(Server.prototype, "url", {
        get: function () {
            return "https://".concat(this.ip, ":").concat(this.port);
        },
        enumerable: false,
        configurable: true
    });
    return Server;
}(AwsServer));
function aws(server) {
    server.isAws = true;
    server.awsInfo = function () {
        return this.url;
    };
    return server;
}
var server = aws(new Server("132.11.00.22", 8080));
console.log(server.awsInfo());

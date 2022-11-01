var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.room = null;
    }
    User.prototype.send = function (message, to) {
        this.room.send(message, this, to);
    };
    User.prototype.receive = function (message, from) {
        console.log("from ".concat(from.name, " => ").concat(this.name, ": ").concat(message));
    };
    return User;
}());
var ChatRoom = /** @class */ (function () {
    function ChatRoom() {
        this.users = {};
    }
    ChatRoom.prototype.register = function (user) {
        this.users[user.name] = user;
        user.room = this; // вот это связка медиатора
    };
    ChatRoom.prototype.send = function (message, from, to) {
        var _this = this;
        if (to) {
            to.receive(message, from);
        }
        else {
            Object.keys(this.users).forEach(function (key) {
                if (_this.users[key] !== from) {
                    _this.users[key].receive(message, from);
                }
            });
        }
    };
    return ChatRoom;
}());
var u1 = new User("user1");
var u2 = new User("vova");
var u3 = new User("Egor");
var room = new ChatRoom();
room.register(u1);
room.register(u2);
room.register(u3);
u1.send("hello", u2);
u1.send("to everyone");

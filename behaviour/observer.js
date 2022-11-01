var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.subscribe = function (observer) {
        this.observers.push(observer);
    };
    Subject.prototype.unsubscribe = function (observer) {
        this.observers = this.observers.filter(function (obs) { return obs !== observer; });
    };
    Subject.prototype.fire = function (action) {
        this.observers.forEach(function (observer) {
            observer.update(action);
        });
    };
    return Subject;
}());
var Observer = /** @class */ (function () {
    function Observer(state) {
        this.state = state;
        this.initialState = state;
    }
    Observer.prototype.update = function (action) {
        switch (action.type) {
            case "INCREMENT":
                this.state = ++this.state;
                break;
            case "DECREMENT":
                this.state = --this.state;
                break;
            case "ADD":
                this.state += action.payload;
                break;
            default:
                this.state = this.initialState;
        }
    };
    return Observer;
}());
var stream$ = new Subject();
var obs1 = new Observer(1);
var obs2 = new Observer(42);
stream$.subscribe(obs1);
stream$.subscribe(obs2);
stream$.fire({ type: "INCREMENT" });
stream$.fire({ type: "INCREMENT" });
stream$.fire({ type: "DECREMENT" });
stream$.fire({ type: "ADD", payload: 10 });
console.log(obs1.state);
console.log(obs2.state);

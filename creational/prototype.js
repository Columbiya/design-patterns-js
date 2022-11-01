var car = {
    wheels: 4,
    init: function () {
        console.log("I have ".concat(this.wheels, " wheels, my owner is ").concat(this.owner));
    }
};
var carWithOwner = Object.create(car, {
    owner: {
        value: 'me'
    }
});
console.log(carWithOwner.__proto__ === car);
carWithOwner.init();

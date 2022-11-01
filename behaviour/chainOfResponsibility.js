var MySum = /** @class */ (function () {
    function MySum(initialValue) {
        if (initialValue === void 0) { initialValue = 42; }
        this.sum = initialValue;
    }
    MySum.prototype.add = function (value) {
        this.sum += value;
        return this;
    };
    return MySum;
}());
var sum1 = new MySum();
console.log(sum1.add(8).add(10).add(1).sum);

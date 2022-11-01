function networkFetch(url) {
    return "".concat(url, " - \u043E\u0442\u0432\u0435\u0442 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430");
}
var cache = new Set();
var proxiedFetch = new Proxy(networkFetch, {
    apply: function (target, thisArg, argArray) {
        var url = argArray[0];
        if (cache.has(url)) {
            return "".concat(url, " - \u041E\u0442\u0432\u0435\u0442 \u0438\u0437 \u043A\u044D\u0448\u0430");
        }
        else {
            cache.add(url);
            return Reflect.apply(target, thisArg, argArray);
        }
    }
});
console.log(proxiedFetch('angular.io'));
console.log(proxiedFetch('angular.io'));
console.log(proxiedFetch('react.io'));

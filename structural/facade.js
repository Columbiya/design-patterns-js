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
var Complaints = /** @class */ (function () {
    function Complaints() {
    }
    Complaints.prototype.reply = function (complaint) {
        return "";
    };
    Complaints.prototype.add = function (complaint) {
        Complaints.complaints.push(complaint);
        return this.reply(complaint);
    };
    Complaints.complaints = [];
    return Complaints;
}());
var ProductComplaints = /** @class */ (function (_super) {
    __extends(ProductComplaints, _super);
    function ProductComplaints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductComplaints.prototype.reply = function (complaint) {
        return "Product ".concat(complaint.id, " ").concat(complaint.customer, " ").concat(complaint.text);
    };
    return ProductComplaints;
}(Complaints));
var ServiceComplaints = /** @class */ (function (_super) {
    __extends(ServiceComplaints, _super);
    function ServiceComplaints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServiceComplaints.prototype.reply = function (complaint) {
        return "Service ".concat(complaint.id, " ").concat(complaint.customer, " ").concat(complaint.text);
    };
    return ServiceComplaints;
}(Complaints));
var ComplaintsTypes;
(function (ComplaintsTypes) {
    ComplaintsTypes[ComplaintsTypes["PRODUCT_COMPLAINT"] = 0] = "PRODUCT_COMPLAINT";
    ComplaintsTypes[ComplaintsTypes["SERVICE_COMPLAINT"] = 1] = "SERVICE_COMPLAINT";
})(ComplaintsTypes || (ComplaintsTypes = {}));
var ComplaintRegistry = /** @class */ (function () {
    function ComplaintRegistry() {
    }
    ComplaintRegistry.prototype.register = function (customer, reason, text, type) {
        var id = Date.now().toString();
        var complaint;
        switch (type) {
            case ComplaintsTypes.SERVICE_COMPLAINT:
                complaint = new ServiceComplaints();
                break;
            case ComplaintsTypes.PRODUCT_COMPLAINT:
                complaint = new ProductComplaints();
                break;
        }
        return complaint.add({ customer: customer, id: id, reason: reason, text: text });
    };
    return ComplaintRegistry;
}());
var registry = new ComplaintRegistry();
console.log(registry.register("vlas", "asd", "asdasdasd", ComplaintsTypes.PRODUCT_COMPLAINT));
console.log(registry.register("vlas", "asd", "asdasdasd", ComplaintsTypes.SERVICE_COMPLAINT));

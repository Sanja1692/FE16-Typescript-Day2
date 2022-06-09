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
var vehicles = /** @class */ (function () {
    function vehicles(brand, model, img, year, weight, eAuto) {
        this.brand = brand;
        this.model = model;
        this.img = img;
        this.year = year;
        this.weight = weight;
        this.eAuto = eAuto;
        // carGroup.push(this);
    }
    return vehicles;
}());
var motorbike = /** @class */ (function (_super) {
    __extends(motorbike, _super);
    function motorbike(brand, model, img, year, weight, eAuto, type, trunk, maxSpeed) {
        var _this = _super.call(this, brand, model, img, year, weight, eAuto) || this;
        _this.type = type;
        _this.trunk = trunk;
        _this.maxSpeed = maxSpeed;
        return _this;
    }
    return motorbike;
}(vehicles));
var trucks = /** @class */ (function (_super) {
    __extends(trucks, _super);
    function trucks(brand, model, img, year, weight, eAuto, 
    // type: string,
    // trunk: string,
    // maxSpeed: number,
    fuelType, numberOfSeats) {
        var _this = _super.call(this, brand, model, img, year, weight, eAuto) || this;
        _this.fuelType = fuelType;
        _this.numberOfSeats = numberOfSeats;
        return _this;
    }
    return trucks;
}(vehicles));

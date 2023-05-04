"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const typeorm_1 = require("typeorm");
const index_1 = require("./index");
let Car = class Car {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Car.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Car.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Car.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 4 }),
    __metadata("design:type", String)
], Car.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Car.prototype, "fuel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 3 }),
    __metadata("design:type", Number)
], Car.prototype, "km", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Car.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10 }),
    __metadata("design:type", Number)
], Car.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10 }),
    __metadata("design:type", Number)
], Car.prototype, "fipe", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 300 }),
    __metadata("design:type", String)
], Car.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Car.prototype, "is_good_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Car.prototype, "published", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 300 }),
    __metadata("design:type", String)
], Car.prototype, "cover_image", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => index_1.User, (user) => user.cars, { onDelete: "CASCADE" }),
    __metadata("design:type", index_1.User)
], Car.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => index_1.Comments, (comments) => comments.cars, { cascade: true }),
    __metadata("design:type", Array)
], Car.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => index_1.ImageCar, (image) => image.car),
    __metadata("design:type", Array)
], Car.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => index_1.Brand, (brand) => brand.cars),
    __metadata("design:type", index_1.Brand)
], Car.prototype, "brand_car", void 0);
Car = __decorate([
    (0, typeorm_1.Entity)("cars")
], Car);
exports.Car = Car;
//# sourceMappingURL=car.entity.js.map
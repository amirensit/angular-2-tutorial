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
var core_1 = require('@angular/core');
var DepartmentListComponent = (function () {
    function DepartmentListComponent() {
        this.departments = [
            { "id": 1, "name": "angular" },
            { "id": 2, "name": "j2ee" },
            { "id": 3, "name": "bla" },
            { "id": 4, "name": "nedia" }
        ];
    }
    DepartmentListComponent = __decorate([
        core_1.Component({
            selector: 'department-list',
            template: "<h2>d\u00E9partment list</h2>\n\n <ul>\n <li *ngFor=\"let a of departments \">\n {{a.id}}\n {{a.name}}\n \n \n </li>\n </ul>\n    \n\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], DepartmentListComponent);
    return DepartmentListComponent;
}());
exports.DepartmentListComponent = DepartmentListComponent;
//# sourceMappingURL=department-list.component.js.map
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
var employee_service_1 = require('./employee.service');
var EmployeeDetailComponent = (function () {
    function EmployeeDetailComponent(employeeService) {
        this.employeeService = employeeService;
        this.employees = [];
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.getEmployees().subscribe(function (res) { return _this.employees = res; });
    };
    EmployeeDetailComponent = __decorate([
        core_1.Component({
            selector: 'employe-detail',
            template: "\n  <h2>Employee details </h2>\n  <ul>\n  <li *ngFor=\"let employee of employees \" >{{employee.id}}  {{employee.title}}   {{employee.thumbnailUrl}} </li>\n  \n  </ul> \n       \n  \n  \n  "
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService])
    ], EmployeeDetailComponent);
    return EmployeeDetailComponent;
}());
exports.EmployeeDetailComponent = EmployeeDetailComponent;
//# sourceMappingURL=employee-detail.component.js.map
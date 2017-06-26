"use strict";
var router_1 = require('@angular/router');
var department_list_component_1 = require('./department-list.component');
var employee_list_component_1 = require('./employee-list.component');
var routes = [
    { path: 'departments', component: department_list_component_1.DepartmentListComponent },
    { path: 'employees', component: employee_list_component_1.EmployeeListComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app-routing.module.js.map

import {ModuleWithProviders} from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import { DepartmentListComponent }  from './department-list.component';
import { EmployeeListComponent } from './employee-list.component';

const routes :Routes= [

            {path : 'departments' , component :DepartmentListComponent },
             {path : 'employees' , component :EmployeeListComponent }
     ];





export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

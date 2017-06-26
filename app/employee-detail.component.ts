import { Component,OnInit } from '@angular/core';
import {EmployeeService} from './employee.service';
@Component({
  selector: 'employe-detail',
  template : `
  <h2>Employee details </h2>
  <ul>
  <li *ngFor="let employee of employees " >{{employee.id}}  {{employee.title}}   {{employee.thumbnailUrl}} </li>
  
  </ul> 
       
  
  
  `
  
})
export class EmployeeDetailComponent implements OnInit { 
  
employees=[];

constructor( private employeeService : EmployeeService   ){}

ngOnInit()
{
  this.employeeService.getEmployees().subscribe(res => this.employees = res  );
}


}

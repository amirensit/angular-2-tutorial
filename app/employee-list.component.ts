import { Component,OnInit } from '@angular/core';
import {EmployeeService} from './employee.service';
@Component({
  selector: 'employe-list',
  template : `
  <h2>Employee List </h2>
  <h3>{{msgError}}</h3>
  <ul>
  <li *ngFor="let employee of employees " >{{employee.title}} </li>
  
  </ul> 
       
  
  
  `
  
})
export class EmployeeListComponent implements OnInit { 
  
employees=[];
msgError : string;

constructor( private employeeService : EmployeeService   ){}

ngOnInit()
{
  this.employeeService.getEmployees().subscribe(res => this.employees = res 
    ,resEmployeError => this.msgError=resEmployeError)   ;
}




}

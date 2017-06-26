import { Component } from '@angular/core';
import { NgModule }      from '@angular/core';

@Component({
  selector: 'department-list',
  template: `<h2>départment list</h2>

 <ul>
 <li *ngFor="let a of departments ">
 {{a.id}}
 {{a.name}}
 
 
 </li>
 </ul>
    

    `
})

export class DepartmentListComponent {

departments = [
  {"id": 1,"name":"angular"},
   {"id": 2,"name":"j2ee"},
    {"id": 3,"name":"bla"},
     {"id": 4,"name":"nedia"}


]



 }

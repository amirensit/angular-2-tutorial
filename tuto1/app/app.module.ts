import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {routing} from './app-routing.module';
import { AppComponent }  from './app.component';

import { DepartmentListComponent }  from './department-list.component';
import { EmployeeListComponent } from './employee-list.component';


@NgModule({
  imports:      [ BrowserModule,routing],
  declarations: [ AppComponent,DepartmentListComponent,EmployeeListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>Routing application</h1>
    <nav>
      <a routerLink="/departments" routerLinkActive="active" >Departments</a>
      <a routerLink="/employees" routerLinkActive="active" >Employees</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }

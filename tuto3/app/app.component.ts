import { Component } from '@angular/core';
import {EmployeeService} from './employee.service';
@Component({
  selector: 'my-app',
  //templateUrl: 'app/app.component.html',
  //styleUrls: [ 'app/app.component.css' ]
  template : ` 
        <h1>Random company</h1>
        <employe-list></employe-list>
        <br>
        <employe-detail></employe-detail>
  
  
  `,
  providers:[EmployeeService]  //we use providers to register a service
  
})
export class AppComponent { 
  myName="amir";

  onSubmit(value:any){

    console.log(value);

  }
}

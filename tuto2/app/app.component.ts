import { Component } from '@angular/core';
import {TutorialsComponent} from './tutorial.component';
@Component({
    selector: 'my-app',
    template:  ` 
                <h1>Hello World from amir  </h1>
                <h2> Parent app component   </h2>
                <label> enter parent app component value</label>
                <input type="text" #pText (keyup)="0">
                <p>value from child tutorial is </p>
                    {{childData}}  
                    <br><hr><br>
                 <my-tutorials (childEvent)="childData=$event" [parentData]="pText.value" ></my-tutorials>`,
    directives:[  TutorialsComponent  ]
})
export class AppComponent {

childData : string;

 }

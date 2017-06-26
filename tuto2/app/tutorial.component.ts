import { Component } from '@angular/core';

import { EventEmitter } from '@angular/core';

@Component({
    selector :'my-tutorials',
    template: `
            <!--
                <h2>{{title}}</h2>
       
                <img src={{imgSrc2}}><br>
                <img [src]="imgSrc1"><br>
                
                <div [class.myClass]="applyClass" > Class binding   </div>
                <div  [style.color]="applyBlue? 'blue' : 'orange' " > this is style binding</div>
                <button (click)="onClick(demoValue.value)"  > ClickMe </button>
                <input type="text" #demoValue >
                    <br>
                <button (mouseover)="onClick($event)"  > ClickMe </button>
               <br> <hr> <br>
                <input type ="text" [(ngModel)] = "fName" >
                <input type="text" [(ngModel)] = "lName" >
                FullName : {{fName}} {{lName}}

                <br> <hr> <br>

                <p *ngIf="showElement">show element</p>
                <div [ngSwitch]="color">
                    <p *ngSwitchWhen="'red'"> red color is shown </p>
                    <p *ngSwitchWhen="'blue'"> blue color is shown </p>
                    <p *ngSwitchDefault> invalid color is shown </p>
                </div>
                <ul>
                    <li *ngFor=" let color of colors ">{{color}}    </li>
                </ul>

                <br> <hr> <br>

                <p [ngClass]="{classOne : cone,classTwo : ctwo}" > ngClass     </p>
                <button (click)="toggle()">Toggle</button><br>
                <button [ngStyle]="{ 'font-style':style,'font-size':size }">ngstyle</button>

                <br>    <hr>    <br>
                
                <h2> child app component   </h2>
                <label> enter child TutorialComponent value</label>
                <input type="text" #childText (keyup)="onChange(childText.value)">
                <p>value from parent AppComponent is </p> 
                {{parentData}} 
                -->
                <h2>{{title}}</h2>
                <h2>{{ title | uppercase }}</h2>
                <h2>{{ title | slice:'2': '4' }}</h2>
                <h2>{{ title | replace:'hello': 'amir' }}</h2>
                <h2>{{ 8.567 | number:'1.1-2' }}</h2>

                <h2>{{ 8.567 | currency:'EUR' }}</h2>
                <h2>{{ 8.567 | currency:'EUR':true }}</h2>

                <h2>{{date | date:'fullDate'}}</h2>
                <h2>{{date | date:'shortDate'}}</h2>
                <h2>{{date | date:'meduimTime'}}</h2>
              
    `,
    
    styles: [`.myClass{
       color:red;
   }
   .classOne{color:white}
   .classTwo {background-color:black}
   
   `
   ],
   inputs : [ `parentData` ],
   outputs : ['childEvent' ]

})
 export class TutorialsComponent {
     date=new Date();
    public title="hello";
    public imgSrc1="http://lorempixel.com/100/100";
    public imgSrc2="http://lorempixel.com/100/200";
    public applyClass = true ;
    public applyBlue = false ;
    public fName;
    public lName;
    public showElement=false;
    public color='red';
    public colors=['red','blue','green'];
    public cone=true;
    public ctwo=true;
    public style='italic';
    public size='30px';
    public parentData : string;
    childEvent= new EventEmitter<string>();


    onClick(a){
        console.log(a);
    }
    
    toggle()
    {
        
            this.cone= ! this.cone;
            this.ctwo= ! this.ctwo;
    }
    onChange(a:string)
    {
        this.childEvent.emit(a);
    }
    

}
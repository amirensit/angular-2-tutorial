"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var TutorialsComponent = (function () {
    function TutorialsComponent() {
        this.date = new Date();
        this.title = "hello";
        this.imgSrc1 = "http://lorempixel.com/100/100";
        this.imgSrc2 = "http://lorempixel.com/100/200";
        this.applyClass = true;
        this.applyBlue = false;
        this.showElement = false;
        this.color = 'red';
        this.colors = ['red', 'blue', 'green'];
        this.cone = true;
        this.ctwo = true;
        this.style = 'italic';
        this.size = '30px';
        this.childEvent = new core_2.EventEmitter();
    }
    TutorialsComponent.prototype.onClick = function (a) {
        console.log(a);
    };
    TutorialsComponent.prototype.toggle = function () {
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    };
    TutorialsComponent.prototype.onChange = function (a) {
        this.childEvent.emit(a);
    };
    TutorialsComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorials',
            template: "\n            <!--\n                <h2>{{title}}</h2>\n       \n                <img src={{imgSrc2}}><br>\n                <img [src]=\"imgSrc1\"><br>\n                \n                <div [class.myClass]=\"applyClass\" > Class binding   </div>\n                <div  [style.color]=\"applyBlue? 'blue' : 'orange' \" > this is style binding</div>\n                <button (click)=\"onClick(demoValue.value)\"  > ClickMe </button>\n                <input type=\"text\" #demoValue >\n                    <br>\n                <button (mouseover)=\"onClick($event)\"  > ClickMe </button>\n               <br> <hr> <br>\n                <input type =\"text\" [(ngModel)] = \"fName\" >\n                <input type=\"text\" [(ngModel)] = \"lName\" >\n                FullName : {{fName}} {{lName}}\n\n                <br> <hr> <br>\n\n                <p *ngIf=\"showElement\">show element</p>\n                <div [ngSwitch]=\"color\">\n                    <p *ngSwitchWhen=\"'red'\"> red color is shown </p>\n                    <p *ngSwitchWhen=\"'blue'\"> blue color is shown </p>\n                    <p *ngSwitchDefault> invalid color is shown </p>\n                </div>\n                <ul>\n                    <li *ngFor=\" let color of colors \">{{color}}    </li>\n                </ul>\n\n                <br> <hr> <br>\n\n                <p [ngClass]=\"{classOne : cone,classTwo : ctwo}\" > ngClass     </p>\n                <button (click)=\"toggle()\">Toggle</button><br>\n                <button [ngStyle]=\"{ 'font-style':style,'font-size':size }\">ngstyle</button>\n\n                <br>    <hr>    <br>\n                \n                <h2> child app component   </h2>\n                <label> enter child TutorialComponent value</label>\n                <input type=\"text\" #childText (keyup)=\"onChange(childText.value)\">\n                <p>value from parent AppComponent is </p> \n                {{parentData}} \n                -->\n                <h2>{{title}}</h2>\n                <h2>{{ title | uppercase }}</h2>\n                <h2>{{ title | slice:'2': '4' }}</h2>\n                <h2>{{ title | replace:'hello': 'amir' }}</h2>\n                <h2>{{ 8.567 | number:'1.1-2' }}</h2>\n\n                <h2>{{ 8.567 | currency:'EUR' }}</h2>\n                <h2>{{ 8.567 | currency:'EUR':true }}</h2>\n\n                <h2>{{date | date:'fullDate'}}</h2>\n                <h2>{{date | date:'shortDate'}}</h2>\n                <h2>{{date | date:'meduimTime'}}</h2>\n              \n    ",
            styles: [".myClass{\n       color:red;\n   }\n   .classOne{color:white}\n   .classTwo {background-color:black}\n   \n   "
            ],
            inputs: ["parentData"],
            outputs: ['childEvent']
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialsComponent);
    return TutorialsComponent;
}());
exports.TutorialsComponent = TutorialsComponent;
//# sourceMappingURL=tutorial.component.js.map
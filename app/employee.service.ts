import {Injectable} from '@angular/core';
import{Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";



@Injectable()
export class EmployeeService {
    private url : string ="https://jsonplaceholder.typicode.com/photos";
    constructor(private http:Http){}

    getEmployees(){
        return this.http.get(this.url)
         .map( (response: Response) => response.json()).catch(this.erreurHandler)  ;

}
erreurHandler(erreur:Response)
{
    console.error(erreur);
    return Observable.throw (erreur || "server erreur");
    
}
}


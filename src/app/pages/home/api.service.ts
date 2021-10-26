import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError  } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class ApiService {

constructor(private http: HttpClient) { }

 public url = "https://reqres.in/api/users";

getRequest(){
    return this.http.get(this.url);
    
}

}

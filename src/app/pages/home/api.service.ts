import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private messageSource = new BehaviorSubject('Change Message');
  currentMessage = this.messageSource.asObservable();
  constructor(private http: HttpClient) { }

  public url = "https://reqres.in/api/users";

  getRequest() {
    return this.http.get(this.url);
  }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

}

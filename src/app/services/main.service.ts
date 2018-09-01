import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: Http) { }

  public getData() : Observable<any> {
    return this.http.get("./assets/quotes.json")
               .pipe(
                 map(
                 (response:Response) => {
                   return response.json();
                 }))
  }

}

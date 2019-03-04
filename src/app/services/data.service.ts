import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
          .pipe(
            tap( posts => {
              // * el operator tap, es un observable que sirve para, que no consuma mucha amemoria al consurmir el servicios
            /// * es decir que solo realice peticiones cada que se invoque, mediante el pipe async en el html.
              console.log(posts);
            })
          );
  }

}

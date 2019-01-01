import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/products';
import { User } from '../models/user';
// import { catchError, retry } from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class DatabaseService {

  private dbUrl= 'http://localhost:3000/api'
  
  private productUrl = `${this.dbUrl}/product`

  private userUrl = `${this.dbUrl}/auth/login`

  constructor(private http: HttpClient) {
  }

  getProducts (): Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl)
  }
  
  login (user: User): Observable<User[]>{
    return this.http.post<User[]>(this.userUrl, user, httpOptions)
  }
}

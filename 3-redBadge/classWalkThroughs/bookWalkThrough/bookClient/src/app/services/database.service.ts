import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/book.model'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private dbUrl = 'http://localhost:3000/books'

  constructor(private http: HttpClient) { }

  getBooks() : Observable<Book[]>{
    return this.http.get<Book[]>(this.dbUrl)
  }

  makeBook(book: Book) : Observable<Book[]>{
    return this.http.post<Book[]>(this.dbUrl, book, httpOptions)
  }
}

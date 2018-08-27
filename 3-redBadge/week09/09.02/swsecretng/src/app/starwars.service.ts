import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(private http: HttpClient) { }

  search(data) {
    return this.http.get(`https://swapi.co/api/${data.search_base}/?search=${data.search_field}`);
  }
}

import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-book',
  // template: `
  //   <h1>This book component is working!</h1>
  // `
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  ratings = [
    { value: 1, view: '⭐'},
    { value: 2, view: '⭐⭐'},
    { value: 3, view: '⭐⭐⭐'},
    { value: 4, view: '⭐⭐⭐⭐'},
    { value: 5, view: '⭐⭐⭐⭐⭐'}
  ]

  ngOnInit() {
    this._book['rating'] = this.ratings[this._book['rating'] -1].view
  }
  
  public _book = {};

  
  @Input()
  set book(book: any) {
    this._book = (book)
  }
  
  get book(): any {
    return this._book
  }  
}
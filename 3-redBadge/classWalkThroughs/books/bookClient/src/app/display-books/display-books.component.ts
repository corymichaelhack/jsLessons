import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-display-books',
  // template: `
  //   <h1>This Display Books component is working!</h1>
  // `
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css']
})

export class DisplayBooksComponent {
  public _book = {}

  @Input()
  set book(book: any) {
    this._book = (book)
  }

  get book(): any {
    return this._book
  }
}
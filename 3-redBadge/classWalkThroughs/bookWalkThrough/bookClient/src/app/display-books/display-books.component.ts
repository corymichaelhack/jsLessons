import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-display-books',
  // template: `
  //   <h1>This Display Books component is working!</h1>
  // `
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css']
})

export class DisplayBooksComponent implements OnInit {
  ratings = ['⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']

  public _book = {}

  ngOnInit() {
    this._book['rating'] = this.ratings[this._book['rating'] - 1]
  }

  @Input()
  set libro(script: any) {
    this._book = (script)
  }

  get book(): any {
    return this._book
  }
}
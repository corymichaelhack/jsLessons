import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  useBtn = false
  createBook: FormGroup
  books = []

  constructor(private fb: FormBuilder) {
    setTimeout(() => {
      this.useBtn = true
    }, 3000)
  }

  ngOnInit() {
    this.createBook = this.fb.group({
      nameOfBook: new FormControl(),
      author: new FormControl(),
      genre: new FormControl(),
      pubYear: new FormControl(),
      rating: new FormControl()
    })
  }

  onCreateBook() {
    this.books.push(this.createBook.value)
    console.log(this.books)
  }

}

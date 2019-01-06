import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { DatabaseService } from '../services/database.service';
import { User } from '../models/user'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  login: FormGroup
  private _user = []

  constructor(private fb: FormBuilder, private dbService: DatabaseService) { }

  ngOnInit() {
    this.login = this.fb.group({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onLogin(): void {
    this._user.push(this.login)
    this.dbService.login(this._user[0].value).subscribe(User => this._user[0].value = User)
    console.log('made it here',this._user[0].value, User)
  }
}

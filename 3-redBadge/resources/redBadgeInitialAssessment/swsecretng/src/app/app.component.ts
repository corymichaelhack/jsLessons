import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StarwarsService } from './starwars.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  swForm = new FormGroup({
    search_base: new FormControl(),
    search_field: new FormControl(),
  });

  swData: Object | '';

  constructor(private sw: StarwarsService) { }

  onSubmit() {
    this.sw.search(this.swForm.value).subscribe((data: DataFromAPI) => {
      this.swData = data.results[0];
    });
  }
}

interface DataFromAPI {
  count: Number;
  next?;
  previous?;
  results: Array<Object>;
}

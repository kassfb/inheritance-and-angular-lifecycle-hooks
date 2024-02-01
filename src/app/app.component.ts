import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // ng serve --port 4401
  title = 'inheritance-and-angular-lifecycle-hooks';
  show = false;
  showInput = true;
  readonly inputControl = new FormControl('', Validators.required);
}

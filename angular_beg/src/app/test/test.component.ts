import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  panelOpenState = false;
}

import { Component } from '@angular/core';
import { InputComponent } from '../../input/input.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: true,
  imports: [InputComponent],
})
export class FormComponent {}

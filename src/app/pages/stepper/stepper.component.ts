import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
 
  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  
}

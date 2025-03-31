import { Component, ElementRef, ViewChild } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent {

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
    
    myControl = new FormControl('');
    filteredOptions: string[];
    options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
  
    constructor() {
      this.filteredOptions = this.options.slice();
    }
  
  
    filter(): void {
      const filterValue = this.input.nativeElement.value.toLowerCase();
      this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
    }


    

}

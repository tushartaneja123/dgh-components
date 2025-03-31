import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [MaterialModule, NgIf],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
})
export class FormFieldComponent implements OnInit{

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  @ViewChild('searchTextBox') searchTextBox!: ElementRef;

  options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
  filteredOptions: string[];

  multipleSelectForm!: FormGroup;
  myControl = new FormControl('');

  selectedToppingList: any[] = [
    { name: 'Abhishek', id: 1 },
    { name: 'Bharat', id: 2 },
    { name: 'Chetan', id: 3 },
    { name: 'Deepak', id: 4 },
    { name: 'Enable', id: 5 },
    { name: 'Google', id: 6 },
    { name: 'Hariom', id: 7 },
  ];

  toppingList: any[] = [...this.selectedToppingList];

  constructor(private _formBuilder: FormBuilder) {
    this.filteredOptions = this.options.slice();
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.multipleSelectForm = this._formBuilder.group({
      dropdownControl: [''],
    });
  }

  filter(): void {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
  }

  filterApply(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.selectedToppingList = this.toppingList.filter((tooping: any) => {
      return tooping.name.toLowerCase().includes(filterValue);
    });
  }

  clearSearchBox() {
    this.searchTextBox.nativeElement.value = '';
    this.selectedToppingList = [...this.toppingList];
  }

  openedChange(event: any) {
    this.searchTextBox.nativeElement.value = '';
    this.selectedToppingList = [...this.toppingList];
    if (event === true) {
      this.searchTextBox.nativeElement.focus();
    }
  }


}

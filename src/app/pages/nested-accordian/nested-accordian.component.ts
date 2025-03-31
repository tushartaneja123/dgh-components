import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-nested-accordian',
  standalone: true,
  imports: [MaterialModule,NgClass],
  templateUrl: './nested-accordian.component.html',
  styleUrl: './nested-accordian.component.scss'
})
export class NestedAccordianComponent {
  
  middleStep = 0;
  innerStep = 0;

  middleItems = Array.from({ length: 2 }).map((_, i) => `Middle #${i}`);
  innerItems = Array.from({ length: 1 }).map((_, i) => `Inner #${i}`);

  setMiddleStep(index: number) {
    this.middleStep = index;
  }

  setInnerStep(index: number) {
    this.innerStep = index;
  }

  nextInnerStep() {
    this.innerStep++;
  }

  prevInnerStep() {
    this.innerStep--;
  }


  getPanelClass(index: number, parentIndex?: number) {
    if (index === -1) {
      return 'outer-panel';
    } else if (parentIndex === undefined) {
      return 'middle-panel';
    } else {
      return 'inner-panel';
    }
  }

}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedAccordianComponent } from './nested-accordian.component';

describe('NestedAccordianComponent', () => {
  let component: NestedAccordianComponent;
  let fixture: ComponentFixture<NestedAccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedAccordianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

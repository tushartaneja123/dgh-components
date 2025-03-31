import { Routes } from '@angular/router';
import { NestedAccordianComponent } from './pages/nested-accordian/nested-accordian.component';
import { CheckboxComponent } from './pages/checkbox/checkbox.component';
import { StepperComponent } from './pages/stepper/stepper.component';
import { FormFieldComponent } from './pages/form-field/form-field.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'nestedPanel',component:NestedAccordianComponent},
    {path:'checkbox',component:CheckboxComponent},
    {path:'stepper',component:StepperComponent},
    {path:'formField',component:FormFieldComponent},
    {path:'tabs',component:TabsComponent},
];

import { Routes } from '@angular/router';
import { NavBoxComponent } from './app/NavBoxes/base-navbox/nav-box.component';
import { ExpNavboxComponent } from './app/NavBoxes/exp-navbox/exp-navbox.component';
import { AdvNavboxComponent } from './app/NavBoxes/adv-navbox/adv-navbox.component';
import { AdvFormComponent } from './app/formPage/adv-form/adv-form.component';
import { ExpFormComponent } from './app/formPage/exp-form/exp-form.component';
import { CompletedFormComponent } from './app/formPage/finalPage/completed-form/completed-form.component';

export const routes: Routes = [
    {path: '', redirectTo: 'MainScreen', pathMatch: 'full'},
    {
    path: 'MainScreen', // domain name 
    component: NavBoxComponent},
    {path: 'AdvNav', component: AdvNavboxComponent},
    {path: 'ExpNav', component: ExpNavboxComponent},
    {path: 'AdvForm', component: AdvFormComponent},
    {path: 'ExpForm', component: ExpFormComponent},
    {path: 'CompletedForm', component: CompletedFormComponent},
];

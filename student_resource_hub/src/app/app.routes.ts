import { Routes } from '@angular/router';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { ResourceFormComponent } from './resource-form/resource-form.component';
import { bootstrapApplication } from '@angular/platform-browser';

export const routes: Routes = [
  { path: 'home', component: ResourceListComponent },
  { path: 'about', component: ResourceDetailsComponent },
  { path: 'add-forms', component: ResourceFormComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: '**', redirectTo: 'home' } 
];

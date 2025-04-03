import { Routes } from '@angular/router';
import { ResourceListComponent } from './resource-list/resource-list.component'; 
import { ResourceDetailsComponent } from './resource-details/resource-details.component'; 
import { ResourceFormComponent } from './resource-form/resource-form.component'; 

export const routes: Routes = [
  { path: '', component: ResourceListComponent },  
  { path: 'about', component: ResourceDetailsComponent },  
  { path: 'add-resource', component: ResourceFormComponent },  
];

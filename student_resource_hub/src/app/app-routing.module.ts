import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { ResourceFormComponent } from './resource-form/resource-form.component';

const routes: Routes = [
  { path: '', component: ResourceListComponent }, // Default route for Home
  { path: 'about', component: ResourceDetailsComponent },
  { path: 'add-resource', component: ResourceFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Use RouterModule to configure routes
  exports: [RouterModule]
})
export class AppRoutingModule { }

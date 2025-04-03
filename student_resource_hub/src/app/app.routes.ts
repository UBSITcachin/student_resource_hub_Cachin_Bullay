import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceListComponent } from './resource-list/resource-list.component';  // Import ResourceListComponent
import { ResourceDetailsComponent } from './resource-details/resource-details.component';

export const routes: Routes = [
  { path: '', component: ResourceListComponent },  // Default path should be routed to resource-list
  { path: 'about', component: ResourceDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // forRoot should only be in your root module
  exports: [RouterModule]
})
export class AppRoutingModule { }

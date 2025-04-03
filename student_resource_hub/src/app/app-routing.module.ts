import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { ResourceFormComponent } from './resource-form/resource-form.component';
import { RouterLinkActive,} from '@angular/router';

const routes: Routes = [
  { path: 'home', component: ResourceListComponent },
  { path: 'about', component: ResourceDetailsComponent },
  { path: 'add-forms', component: ResourceFormComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Optional: redirect to home on empty path
  { path: '**', redirectTo: '/home' } // Optional: handle any unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, RouterLinkActive, RouterLink]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Import the routing module

import { ResourceListComponent } from './resource-list/resource-list.component'; // Import other components
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { ResourceFormComponent } from './resource-form/resource-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourceListComponent,
    ResourceDetailsComponent,
    ResourceFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // Import the routing module here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

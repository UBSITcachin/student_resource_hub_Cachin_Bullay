import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // For routing
import { ResourceListComponent } from './resource-list/resource-list.component'; 
import { FooterComponent } from './footer/footer.component'; 
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule, // Import RouterModule for routing
    ResourceListComponent, 
    FooterComponent, 
    ResourceDetailsComponent,
    NavigationMenuComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Resource Hub';
}

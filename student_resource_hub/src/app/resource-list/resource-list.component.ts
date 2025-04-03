import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf/ngFor

interface Resource {
  title: string;
  description: string;
  category: string;
  tag: string;
}

@Component({
  selector: 'app-resource-list',
  standalone: true, // Mark this component as standalone
  imports: [CommonModule], // Import CommonModule to use Angular directives like ngFor/ngIf
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent {
  resources: Resource[] = [
    { title: 'Angular Basics', description: 'Introduction to Angular framework', category: 'Frontend', tag: 'Angular' },
    { title: 'TypeScript Guide', description: 'Deep dive into TypeScript', category: 'Programming', tag: 'TypeScript' },
    { title: 'RxJS Observables', description: 'Understanding reactive programming', category: 'Frontend', tag: 'RxJS' },
  ];

  viewDetails(resource: Resource): void {
    alert(`Viewing details for: ${resource.title}`);
  }
}

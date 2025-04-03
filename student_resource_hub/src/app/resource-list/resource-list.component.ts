import { Component } from '@angular/core';

interface Resource {
  title: string;
  description: string;
  category: string;
  tag: string;
}

@Component({
  selector: 'app-resource-list',
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
import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Resource {
  title: string;
  fullDescription: string;
  category: string;
  url: string;
  author: string;
  publicationDate: string;
}

@Component({
  selector: 'app-resource-details',
  imports: [],
  templateUrl: './resource-details.component.html',
  styleUrl: './resource-details.component.css'
})
export class ResourceDetailsComponent {
  @Input() resource!: Resource;
  @Output() backToList = new EventEmitter<void>();

  goBack(): void {
    this.backToList.emit();
  }
}

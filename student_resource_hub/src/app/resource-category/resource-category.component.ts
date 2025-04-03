import { Component, Input } from '@angular/core';

interface Resource {
  title: string;
  description: string;
  category: string;
}

interface Category {
  title: string;
  description: string;
  resources: Resource[];
}

@Component({
  selector: 'app-resource-category',
  templateUrl: './resource-category.component.html',
  styleUrls: ['./resource-category.component.css']
})
export class ResourceCategoryComponent {
  @Input() category!: Category;
}
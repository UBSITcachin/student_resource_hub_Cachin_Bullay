import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

interface ResourceForm {
  title: string;
  description: string;
  url: string;
  category: string;
  author: string;
  imageURL?: string;
}

@Component({
  selector: 'app-resource-form',
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.css']
})
export class ResourceFormComponent {
  @Output() submitForm = new EventEmitter<ResourceForm>();
  @Output() cancelForm = new EventEmitter<void>();

  resource: ResourceForm = {
    title: '',
    description: '',
    url: '',
    category: '',
    author: '',
    imageURL: ''
  };

  categories = ['Frontend', 'Backend', 'DevOps', 'Database'];

  constructor(private router: Router) {}

  get isFormValid(): boolean {
    return this.resource.title.trim() !== '' &&
           this.resource.description.trim() !== '' &&
           this.resource.url.trim() !== '' &&
           this.resource.category.trim() !== '' &&
           this.resource.author.trim() !== '';
  }

  get imageClass(): string {
    return this.resource.imageURL ? 'has-image' : 'no-image';
  }

  onSubmit(): void {
    if (this.isFormValid) {
      this.submitForm.emit(this.resource);
      this.navigateToList();
    }
  }

  onCancel(): void {
    this.cancelForm.emit();
    this.navigateToList();
  }

  navigateToList(): void {
    this.router.navigate(['/resources']);
  }
}

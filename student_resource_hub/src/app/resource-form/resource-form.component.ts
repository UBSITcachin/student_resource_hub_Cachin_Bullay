import { Component, EventEmitter, Output } from "@angular/core";

interface ResourceForm {
  title: string;
  description: string;
  url: string;
  category: string;
  author: string;
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
    author: ''
  };

  categories = ['Frontend', 'Backend', 'DevOps', 'Database'];

  onSubmit(): void {
    this.submitForm.emit(this.resource);
  }

  onCancel(): void {
    this.cancelForm.emit();
  }
}
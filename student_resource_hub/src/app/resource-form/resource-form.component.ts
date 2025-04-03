import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resource-form',
  standalone: true,
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.css'],
  imports: [FormsModule, NgFor] // Import FormsModule to use ngModel
})
export class ResourceFormComponent {
  resource = { title: '', description: '', url: '', category: '', author: '' };
  categories = ['Programming', 'Design', 'Math'];

  onSubmit() {
    console.log('Form submitted:', this.resource);
  }

  onCancel() {
    console.log('Form canceled');
  }
}

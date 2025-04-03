import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-resource-form',
  standalone: true,
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.css'],
  imports: [FormsModule, NgFor, RouterLink, RouterLinkActive, RouterModule]
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

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ResourceFormComponent } from './resource-form.component';

describe('ResourceFormComponent', () => {
  let component: ResourceFormComponent;
  let fixture: ComponentFixture<ResourceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResourceFormComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ResourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit submitForm event on submit', () => {
    spyOn(component.submitForm, 'emit');
    component.resource = {
      title: 'New Resource',
      description: 'Description of the resource',
      url: 'https://example.com',
      category: 'Frontend',
      author: 'John Doe'
    };
    component.onSubmit();
    expect(component.submitForm.emit).toHaveBeenCalledWith(component.resource);
  });

  it('should emit cancelForm event on cancel', () => {
    spyOn(component.cancelForm, 'emit');
    component.onCancel();
    expect(component.cancelForm.emit).toHaveBeenCalled();
  });
});
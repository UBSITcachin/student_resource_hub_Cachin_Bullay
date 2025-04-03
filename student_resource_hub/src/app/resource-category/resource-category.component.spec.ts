import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourceCategoryComponent } from './resource-category.component';

describe('ResourceCategoryComponent', () => {
  let component: ResourceCategoryComponent;
  let fixture: ComponentFixture<ResourceCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResourceCategoryComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ResourceCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display category details and resources', () => {
    component.category = {
      title: 'Frontend Development',
      description: 'Resources for frontend technologies.',
      resources: [
        { title: 'Angular Basics', description: 'Introduction to Angular.', category: 'Frontend' },
        { title: 'CSS Grid', description: 'Learn how to use CSS Grid for layouts.', category: 'Frontend' }
      ]
    };
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Frontend Development');
    expect(compiled.querySelectorAll('.resource-card').length).toBe(2);
  });
});
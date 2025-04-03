import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourceDetailsComponent } from './resource-details.component';

describe('ResourceDetailsComponent', () => {
  let component: ResourceDetailsComponent;
  let fixture: ComponentFixture<ResourceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResourceDetailsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ResourceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display resource details', () => {
    component.resource = {
      title: 'Angular Deep Dive',
      fullDescription: 'A comprehensive guide to Angular framework.',
      category: 'Frontend',
      url: 'https://angular.io',
      author: 'John Doe',
      publicationDate: '2024-01-01'
    };
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Angular Deep Dive');
    expect(compiled.querySelector('p.description').textContent).toContain('A comprehensive guide');
  });

  it('should emit backToList event on button click', () => {
    spyOn(component.backToList, 'emit');
    component.goBack();
    expect(component.backToList.emit).toHaveBeenCalled();
  });
});
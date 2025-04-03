import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourceListComponent } from './resource-list.component';

describe('ResourceListComponent', () => {
  let component: ResourceListComponent;
  let fixture: ComponentFixture<ResourceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResourceListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ResourceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have resources defined', () => {
    expect(component.resources.length).toBeGreaterThan(0);
  });

  it('should trigger viewDetails on button click', () => {
    spyOn(window, 'alert');
    component.viewDetails(component.resources[0]);
    expect(window.alert).toHaveBeenCalledWith(`Viewing details for: ${component.resources[0].title}`);
  });
});
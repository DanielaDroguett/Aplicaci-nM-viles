import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalFormPage } from './animal-form.page';

describe('AnimalFormPage', () => {
  let component: AnimalFormPage;
  let fixture: ComponentFixture<AnimalFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

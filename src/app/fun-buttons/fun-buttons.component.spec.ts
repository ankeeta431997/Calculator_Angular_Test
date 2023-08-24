import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunButtonsComponent } from './fun-buttons.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button', // Match the selector used in the template
  template: '<div></div>', // Provide a minimal mock template
})
class MockAppButtonComponent {
  @Input() label: any;
}

describe('FunButtonsComponent', () => {
  let component: FunButtonsComponent;
  let fixture: ComponentFixture<FunButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunButtonsComponent,MockAppButtonComponent]
     
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});

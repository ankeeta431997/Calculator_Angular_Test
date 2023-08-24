import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, EventEmitter, Input, Output } from '@angular/core'; // Import Component and Input

import { NumButtonsComponent } from './num-buttons.component';

@Component({
  selector: 'app-button',   // Match the selector used in the template
  template: '<button (click)="clickHandler()">{{ label }}</button>',  // Simulate the button behavior
})
class MockAppButtonComponent {
  @Input() label: any;
  @Output() onClick = new EventEmitter<void>();  // Simulate the button click event

  clickHandler() {
    this.onClick.emit();
  }
}

describe('NumButtonsComponent', () => {
  let component: NumButtonsComponent;
  let fixture: ComponentFixture<NumButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumButtonsComponent, MockAppButtonComponent], // Declare the mock component
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit numButtonClick event on button click', () => {
    spyOn(component.numButtonClick, 'emit');
    const buttonElement = fixture.nativeElement.querySelector('button');

    // Trigger click and wait for changes
    buttonElement.click();
    fixture.detectChanges();

    expect(component.numButtonClick.emit).toHaveBeenCalledWith(component.label);
  });

  it('should call onClickHandler when button is clicked', () => {
    spyOn(component, 'onClickHandler');
    const buttonElement = fixture.nativeElement.querySelector('button');

    // Trigger click and wait for changes
    buttonElement.click();
    fixture.detectChanges();

    expect(component.onClickHandler).toHaveBeenCalled();
  });

  it('should render the button label', () => {
    const label = 'Test Label';
    component.label = label;
    fixture.detectChanges();

    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.textContent).toContain(label);
  });

  

  it('should log to console when button is clicked', () => {
    spyOn(console, 'log');
    const label = 'Test Label';
    component.label = label;
    fixture.detectChanges();

    const buttonElement = fixture.nativeElement.querySelector('button');
    buttonElement.click();

    expect(console.log).toHaveBeenCalledWith('Number button Handler from num button ', label);
  });
  
});
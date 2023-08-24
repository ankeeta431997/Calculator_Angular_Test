import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpButtonsComponent } from './op-buttons.component';
import { EventEmitter, Output ,Input,Component} from '@angular/core';

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
describe('OpButtonsComponent', () => {
  let component: OpButtonsComponent;
  let fixture: ComponentFixture<OpButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpButtonsComponent,MockAppButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

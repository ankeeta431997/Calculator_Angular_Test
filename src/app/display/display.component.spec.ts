import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponent } from './display.component';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the input value', () => {
    const testValue = '42';
    component.currentValue = testValue;
    fixture.detectChanges();
    
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('.screen-calc');
    expect(inputElement.value).toBe(testValue);
  });

});

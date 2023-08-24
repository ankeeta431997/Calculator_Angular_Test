import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the label in the button', () => {
    component.label = 'Test Label';
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('.buttons'));
    expect(buttonElement.nativeElement.textContent).toContain('Test Label');
  });

  it('should have the correct ID attribute', () => {
    component.id = 'test-id';
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('.buttons'));
    expect(buttonElement.nativeElement.getAttribute('id')).toEqual('test-id');
  });

  it('should emit onClick event when the button is clicked', () => {
    spyOn(component.onClick, 'emit');
    const buttonElement = fixture.debugElement.query(By.css('.buttons')).nativeElement;
    buttonElement.click();
    expect(component.onClick.emit).toHaveBeenCalled();
  });

  it('should log a message when onButtonClick is called', () => {
    spyOn(console, 'log');
    component.onButtonClick();
    expect(console.log).toHaveBeenCalledWith('in button click');
  });

});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CalculatorComponent } from './calculator.component';
import { DisplayComponent } from '../display/display.component';
import { NumButtonsComponent } from '../num-buttons/num-buttons.component';
import { ButtonComponent } from '../button/button.component';
import { OpButtonsComponent } from '../op-buttons/op-buttons.component';
import { FunButtonsComponent } from '../fun-buttons/fun-buttons.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      declarations: [ CalculatorComponent,DisplayComponent,NumButtonsComponent,ButtonComponent,OpButtonsComponent,FunButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // testing DOM Elements
  it('should render the calculator container', () => {
    const calculatorContainer = fixture.nativeElement.querySelector('.calculatorContainer');
    expect(calculatorContainer).toBeTruthy();
  });

  it('should render the display container', () => {
    const displayContainer = fixture.nativeElement.querySelector('.displayContainer');
    expect(displayContainer).toBeTruthy();
  });

  it('should render numeric buttons with correct content', () => {
    const numericButtons = fixture.nativeElement.querySelectorAll('.num-btns button'); // Query all buttons inside num-btns
   // console.log('Numeric Buttons:', numericButtons); // Debug output
    expect(numericButtons.length).toBe(component.number.length); // Expected length is the same as the number array length
    
    numericButtons.forEach((button: { textContent: any; }, index: any) => {
    //  console.log('Button Text:', button.textContent); // Debug output
      const numericValue = parseInt(button.textContent);
      expect(numericValue).toBe(component.number[index]); // Use index to loop through the number array
    });
  });
  

  it('should render operator buttons with correct content', () => {
    const operatorButtons = fixture.nativeElement.querySelectorAll('.btn-op button');
    //console.log('Operation Buttons:', operatorButtons); // Debug output
    expect(operatorButtons.length).toBe(component.op.length);

    operatorButtons.forEach((button: { textContent: any; }, index: any) => {
     // console.log('Operation Buttons text:', button.textContent); // Debug output
      const operatorValue = button.textContent.trim();
      expect(component.op).toContain(operatorValue);
    });
  });
  
  it('should render function buttons with correct content', () => {
    const functionButtons = fixture.nativeElement.querySelectorAll('.btn-fun button');
    //console.log('Function Buttons:', functionButtons); // Debug output
    expect(functionButtons.length).toBe(component.function.length);

    functionButtons.forEach((button: { textContent: any; }, index: any) => {
      //console.log('Function Buttons text:', button.textContent); // Debug output
      const functionValue = button.textContent.trim();
      expect(component.function).toContain(functionValue);
    });
  });
  
  //haldler test
  // it('should handle numeric button clicks', () => {
  //   const numericButtons = fixture.nativeElement.querySelectorAll('.num-btns button');
  
  //   let expectedValue = '0'; // Initialize the expected value
  
  //   for (let i = 0; i < numericButtons.length; i++) {
  //     const numericValue = component.number[i];
  //     numericButtons[i].click(); // Simulate the button click
  //     fixture.detectChanges();
  
  //     if (expectedValue === '0') {
  //       expectedValue = numericValue.toString();
  //     } else {
  //       expectedValue += numericValue.toString();
  //     }
  
  //     expect(component.getValue()).toBe(expectedValue); // Check getValue()
  
  //     // Check if the inputArray is updated correctly
  //     const inputArray = component.getInputArray();
  //     const lastInput = inputArray[inputArray.length - 1];
  //     expect(lastInput.type).toBe('num');
  //     expect(lastInput.value).toBe(numericValue.toString());
  //   }
  // });
    
  
  
});

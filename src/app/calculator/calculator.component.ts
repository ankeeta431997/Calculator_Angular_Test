import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  // constructor(private myService: MyServiceService) {}

  @Input() id: any;

  number: any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  op: any[] = ['+', '-', '/', '*', '='];

  function: any[] = ['AC', 'DEL', 'UNDO'];

  currentValue: string = '0';
  private apiUrl = 'http://localhost:8080/calculator/calculation';
  private previousResult: string = '0';
  private inputArray: { value: string; type: string }[] = [];
  private undoStack: string[] = [];
  dispalyValue: string = '';
  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  onNumHandler(num: any) {
    //console.log("Number Button click from calculator: ", num)
    //this.myService.numClickHadler(num);
    this.dispalyValue = this.getValue();
    //console.log("Number key " + this.dispalyValue);
    const newValue = this.dispalyValue === '0' ? num.toString() :
      this.dispalyValue + num;
    this.setValue(newValue);
    const inputArray = this.getInputArray();
    if (inputArray.length > 0 && inputArray[inputArray.length - 1].type == 'num') {
      inputArray[inputArray.length - 1].value += num;
    }
    else {
      inputArray.push({ value: num, type: 'num' });
    }
    // this.inputArray.push({ value: num, type: 'num' })
    //console.log(this.inputArray, 'after push');
    this.setInputArray(inputArray);
  }

  onOpHandler(key: any) {
    console.log("Operation Button click calculator: ", key)
    // this.myService.opClickHandler(val, 'op');
    if (key === '=') {
      this.calculate();
      this.inputArray = [];
    } else {
      let value = this.getValue() + "";
      //  console.log(typeof(value))
      const lastChar = value.slice(-1);
      let newValue = null;
      console.log(this.currentValue);
      if (lastChar === '+' || lastChar === '-' || lastChar === '*' ||
        lastChar === '/') {
        newValue = value.slice(0, -1) + key;
        this.setValue(newValue);
      } else {
        newValue = value + key;
        this.setValue(newValue);
      }
      const inputArray = this.getInputArray();
      if (inputArray.length > 0 && inputArray[inputArray.length -
        1].type === 'op') {
        // Update the last operation key instead of adding a new one
        inputArray[inputArray.length - 1].value = key;
      } else {
        // Add the operation key to the array
        inputArray.push({ value: key, type: 'op' });
      }
      if (this.undoStack.length > 0) {
        const previousValue = this.undoStack[this.undoStack.length - 1];
        this.inputArray = [{ value: previousValue, type: 'num' }, ...inputArray]
      }
      else {
        this.inputArray = inputArray;
      }
      this.setInputArray(inputArray);
      console.log(this.inputArray, 'after push');
    }
  }

  onFunHandler(key: any) {
    console.log("Function Button click calculator: ", key)
    // this.myService.funClickHandler(val);
    if (key == 'AC') {
      const inputArray = this.getInputArray();
      this.setValue('0');
      this.previousResult = '0';
      this.inputArray = [];
      //this.setInputArray(inputArray);
    } else if (key == 'DEL') {
      this.inputArray.pop();
      console.log(this.inputArray, 'after pop');
      const value = this.getValue() + '';
      const newValue = value.length === 1 ? '0' : value.slice(0, -1);
      this.setValue(newValue);
    } else if (key === 'UNDO') {
      const previousValue = this.undoStack.pop();
      if (previousValue) {
        this.setValue(previousValue);
        this.inputArray = [{ value: previousValue, type: 'num' }];
      }
    }
  }

  calculate() {
    const inputArray = this.getInputArray();

    if (this.previousResult !== '0') {
      this.http.post<any>(this.apiUrl, JSON.stringify(inputArray))
        .pipe(
          catchError(error => {
            if (error.status === 403) {
              // Handle 403 Forbidden error
              // Perform necessary actions (e.g., display an error message)
              console.log('Access Forbidden');
            }
            return throwError(error);
          })
        )
        .subscribe(resp => {
          const result = resp.result;
          this.previousResult = result;
          this.undoStack.push(result);
          this.setValue(result);
          this.inputArray = [{ value: result, type: 'num' }]; // Clear previous input array and add result as the first element
          console.log("Result: " + result);
        });
    } else {
      this.http.post<any>(this.apiUrl, JSON.stringify(inputArray))
        .pipe(
          catchError(error => {
            if (error.status === 403) {
              // Handle 403 Forbidden error
              // Perform necessary actions (e.g., display an error message)
              console.log('Access Forbidden');
              alert('You are a user. Only admin access is required to see the output.');

            }
            return throwError(error);
          })
        )
        .subscribe(resp => {
          const result = resp.result;
          this.previousResult = result;
          this.undoStack.push(result);
          this.inputArray.push({ value: result, type: 'num' }); // Add result to the input array
          this.setValue(result);
          console.log("Result: " + result);
        });
    }
  }




  getValue(): string {
    return this.currentValue;
  }

  setValue(value: string): void {
    this.currentValue = value;
  }

  getInputArray(): { value: string; type: string }[] {
    return this.inputArray;
  }

  setInputArray(inputArray: { value: string; type: string }[]): void {
    this.inputArray = inputArray;
  }

}

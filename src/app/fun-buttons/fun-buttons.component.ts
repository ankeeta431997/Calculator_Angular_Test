import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-fun-buttons',
  templateUrl: './fun-buttons.component.html',
  styleUrls: ['./fun-buttons.component.css']
})
export class FunButtonsComponent extends ButtonComponent implements OnInit{

@Input() override label: any;
@Output() funButtonClick = new EventEmitter<any>();

onClickHandler() {
  console.log("Function button Handler ", this.label);
  this.funButtonClick.emit(this.label);
}
}


import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-num-buttons',
  templateUrl: './num-buttons.component.html',
  styleUrls: ['./num-buttons.component.css']
})
export class NumButtonsComponent extends ButtonComponent implements OnInit{
 
  @Input() override label: any ="";
  @Output() numButtonClick: EventEmitter<any> = new EventEmitter<any>();

  onClickHandler() {
    console.log("Number button Handler from num button ", this.label);
    this.numButtonClick.emit(this.label);
  }

}





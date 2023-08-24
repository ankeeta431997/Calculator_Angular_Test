import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-op-buttons',
  templateUrl: './op-buttons.component.html',
  styleUrls: ['./op-buttons.component.css']
})
export class OpButtonsComponent extends ButtonComponent implements OnInit {
  @Input() override label: any;
  @Output() opButtonClick = new EventEmitter<any>();

  onClickHandler() {
    console.log("Operation button Handler ", this.label);
    this.opButtonClick.emit(this.label);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //label = "1";
  title = 'angular';
  id="calc-1"
  


  onClickHandler(){
    console.log('clicked button');
  }
}

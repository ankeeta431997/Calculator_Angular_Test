import { Component, Input, OnInit } from '@angular/core';
//import { MyServiceService } from '../my-service.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{
  @Input() currentValue:string='0';

  // constructor(private myService: MyServiceService)
  // { }

    ngOnInit(): void {
    //   this.myService.currentDisplayValue$S.subscribe(value =>{
    //     this.currentValue=value;
    //  })

    }

}


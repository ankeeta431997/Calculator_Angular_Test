
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { FunButtonsComponent } from './fun-buttons/fun-buttons.component';
import { NumButtonsComponent } from './num-buttons/num-buttons.component';
import { OpButtonsComponent } from './op-buttons/op-buttons.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DisplayComponent } from './display/display.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FunButtonsComponent,
    NumButtonsComponent,
    OpButtonsComponent,
    CalculatorComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

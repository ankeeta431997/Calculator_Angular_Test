import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CalculatorComponent } from './calculator/calculator.component';
import { DisplayComponent } from './display/display.component';
import { NumButtonsComponent } from './num-buttons/num-buttons.component';
import { ButtonComponent } from './button/button.component';
import { OpButtonsComponent } from './op-buttons/op-buttons.component';
import { FunButtonsComponent } from './fun-buttons/fun-buttons.component';
import { Component } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        CalculatorComponent,
        DisplayComponent,
        NumButtonsComponent,
        ButtonComponent,
        OpButtonsComponent,
        FunButtonsComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    expect(Component).toBeTruthy();
  });
});

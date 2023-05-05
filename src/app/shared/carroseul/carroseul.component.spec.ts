/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarroseulComponent } from './carroseul.component';

describe('CarroseulComponent', () => {
  let component: CarroseulComponent;
  let fixture: ComponentFixture<CarroseulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroseulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroseulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

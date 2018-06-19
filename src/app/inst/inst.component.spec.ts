/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InstComponent } from './inst.component';

describe('InstComponent', () => {
  let component: InstComponent;
  let fixture: ComponentFixture<InstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

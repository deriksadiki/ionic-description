/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PubComponent } from './pub.component';

describe('PubComponent', () => {
  let component: PubComponent;
  let fixture: ComponentFixture<PubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

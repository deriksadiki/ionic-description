/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BuildComponent } from './build.component';

describe('BuildComponent', () => {
  let component: BuildComponent;
  let fixture: ComponentFixture<BuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

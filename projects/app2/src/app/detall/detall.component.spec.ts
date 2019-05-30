/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetallComponent } from './detall.component';

describe('DetallComponent', () => {
  let component: DetallComponent;
  let fixture: ComponentFixture<DetallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

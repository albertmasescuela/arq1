/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LlistaComponent } from './llista.component';

describe('LlistaComponent', () => {
  let component: LlistaComponent;
  let fixture: ComponentFixture<LlistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

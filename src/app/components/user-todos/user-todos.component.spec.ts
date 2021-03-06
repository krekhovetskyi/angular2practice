/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserTodosComponent } from './user-todos.component';

describe('UserTodosComponent', () => {
  let component: UserTodosComponent;
  let fixture: ComponentFixture<UserTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

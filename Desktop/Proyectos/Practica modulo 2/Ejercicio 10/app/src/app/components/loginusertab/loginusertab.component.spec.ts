import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginusertabComponent } from './loginusertab.component';

describe('LoginusertabComponent', () => {
  let component: LoginusertabComponent;
  let fixture: ComponentFixture<LoginusertabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginusertabComponent]
    });
    fixture = TestBed.createComponent(LoginusertabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

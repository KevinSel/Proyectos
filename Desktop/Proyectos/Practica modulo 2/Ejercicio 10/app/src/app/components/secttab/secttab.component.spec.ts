import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecttabComponent } from './secttab.component';

describe('SecttabComponent', () => {
  let component: SecttabComponent;
  let fixture: ComponentFixture<SecttabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecttabComponent]
    });
    fixture = TestBed.createComponent(SecttabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

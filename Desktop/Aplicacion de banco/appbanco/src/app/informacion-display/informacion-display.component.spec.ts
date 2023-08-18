import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionDisplayComponent } from './informacion-display.component';

describe('InformacionDisplayComponent', () => {
  let component: InformacionDisplayComponent;
  let fixture: ComponentFixture<InformacionDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacionDisplayComponent]
    });
    fixture = TestBed.createComponent(InformacionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

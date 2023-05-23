import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniheaderComponent } from './miniheader.component';

describe('MiniheaderComponent', () => {
  let component: MiniheaderComponent;
  let fixture: ComponentFixture<MiniheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniheaderComponent]
    });
    fixture = TestBed.createComponent(MiniheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

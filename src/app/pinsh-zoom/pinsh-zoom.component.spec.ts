import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinshZoomComponent } from './pinsh-zoom.component';

describe('PinshZoomComponent', () => {
  let component: PinshZoomComponent;
  let fixture: ComponentFixture<PinshZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinshZoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinshZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

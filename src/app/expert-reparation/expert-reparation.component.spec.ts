import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertReparationComponent } from './expert-reparation.component';

describe('ExpertReparationComponent', () => {
  let component: ExpertReparationComponent;
  let fixture: ComponentFixture<ExpertReparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertReparationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertReparationTerrainComponent } from './expert-reparation-terrain.component';

describe('ExpertReparationTerrainComponent', () => {
  let component: ExpertReparationTerrainComponent;
  let fixture: ComponentFixture<ExpertReparationTerrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertReparationTerrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertReparationTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

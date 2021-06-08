import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertTerrainComponent } from './expert-terrain.component';

describe('ExpertTerrainComponent', () => {
  let component: ExpertTerrainComponent;
  let fixture: ComponentFixture<ExpertTerrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertTerrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

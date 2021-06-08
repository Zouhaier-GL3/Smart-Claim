import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertDevisComponent } from './expert-devis.component';

describe('ExpertDevisComponent', () => {
  let component: ExpertDevisComponent;
  let fixture: ComponentFixture<ExpertDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertDevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertVisioComponent } from './expert-visio.component';

describe('ExpertVisioComponent', () => {
  let component: ExpertVisioComponent;
  let fixture: ComponentFixture<ExpertVisioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertVisioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertVisioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

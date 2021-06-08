import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentSaisieComponent } from './agent-saisie.component';

describe('AgentSaisieComponent', () => {
  let component: AgentSaisieComponent;
  let fixture: ComponentFixture<AgentSaisieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentSaisieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentSaisieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

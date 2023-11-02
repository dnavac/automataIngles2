import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomataComponent } from './automata.component';

describe('AutomataComponent', () => {
  let component: AutomataComponent;
  let fixture: ComponentFixture<AutomataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomataComponent]
    });
    fixture = TestBed.createComponent(AutomataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

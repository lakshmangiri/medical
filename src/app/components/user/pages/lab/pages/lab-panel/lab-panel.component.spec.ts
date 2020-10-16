import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabPanelComponent } from './lab-panel.component';

describe('LabPanelComponent', () => {
  let component: LabPanelComponent;
  let fixture: ComponentFixture<LabPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

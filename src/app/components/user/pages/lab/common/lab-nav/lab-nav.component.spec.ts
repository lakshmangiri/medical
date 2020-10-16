import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabNavComponent } from './lab-nav.component';

describe('LabNavComponent', () => {
  let component: LabNavComponent;
  let fixture: ComponentFixture<LabNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

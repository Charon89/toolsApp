import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandBySpinnerComponent } from './stand-by-spinner.component';

describe('StandBySpinnerComponent', () => {
  let component: StandBySpinnerComponent;
  let fixture: ComponentFixture<StandBySpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandBySpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandBySpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

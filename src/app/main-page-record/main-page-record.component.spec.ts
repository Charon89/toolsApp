import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageRecordComponent } from './main-page-record.component';

describe('MainPageRecordComponent', () => {
  let component: MainPageRecordComponent;
  let fixture: ComponentFixture<MainPageRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

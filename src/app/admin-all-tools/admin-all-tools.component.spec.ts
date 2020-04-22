import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllToolsComponent } from './admin-all-tools.component';

describe('AdminAllToolsComponent', () => {
  let component: AdminAllToolsComponent;
  let fixture: ComponentFixture<AdminAllToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAllToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

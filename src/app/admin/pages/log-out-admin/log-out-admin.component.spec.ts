import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogOutAdminComponent } from './log-out-admin.component';

describe('LogOutAdminComponent', () => {
  let component: LogOutAdminComponent;
  let fixture: ComponentFixture<LogOutAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogOutAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogOutAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

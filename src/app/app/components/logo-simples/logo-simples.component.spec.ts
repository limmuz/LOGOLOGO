import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSimplesComponent } from './logo-simples.component';

describe('LogoSimplesComponent', () => {
  let component: LogoSimplesComponent;
  let fixture: ComponentFixture<LogoSimplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoSimplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThefooterComponent } from './thefooter.component';

describe('ThefooterComponent', () => {
  let component: ThefooterComponent;
  let fixture: ComponentFixture<ThefooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThefooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

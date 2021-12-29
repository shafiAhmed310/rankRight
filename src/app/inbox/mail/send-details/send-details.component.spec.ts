import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendDetailsComponent } from './send-details.component';

describe('SendDetailsComponent', () => {
  let component: SendDetailsComponent;
  let fixture: ComponentFixture<SendDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

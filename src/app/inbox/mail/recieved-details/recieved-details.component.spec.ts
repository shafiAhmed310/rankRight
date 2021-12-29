import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievedDetailsComponent } from './recieved-details.component';

describe('RecievedDetailsComponent', () => {
  let component: RecievedDetailsComponent;
  let fixture: ComponentFixture<RecievedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecievedDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecievedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

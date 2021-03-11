import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFrontComponent } from './view-front.component';

describe('ViewFrontComponent', () => {
  let component: ViewFrontComponent;
  let fixture: ComponentFixture<ViewFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

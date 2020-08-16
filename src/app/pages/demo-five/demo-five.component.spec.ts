import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFiveComponent } from './demo-five.component';

describe('DemoFiveComponent', () => {
  let component: DemoFiveComponent;
  let fixture: ComponentFixture<DemoFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

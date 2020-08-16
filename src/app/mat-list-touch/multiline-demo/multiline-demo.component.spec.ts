import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultilineDemoComponent } from './multiline-demo.component';

describe('MultilineDemoComponent', () => {
  let component: MultilineDemoComponent;
  let fixture: ComponentFixture<MultilineDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultilineDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultilineDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

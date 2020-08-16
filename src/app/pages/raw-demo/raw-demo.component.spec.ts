import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawDemoComponent } from './raw-demo.component';

describe('RawDemoComponent', () => {
  let component: RawDemoComponent;
  let fixture: ComponentFixture<RawDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

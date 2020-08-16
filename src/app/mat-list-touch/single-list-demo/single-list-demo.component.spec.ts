import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleListDemoComponent } from './single-list-demo.component';

describe('SingleListDemoComponent', () => {
  let component: SingleListDemoComponent;
  let fixture: ComponentFixture<SingleListDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleListDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleListDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalnavbarComponent } from './verticalnavbar.component';

describe('VerticalnavbarComponent', () => {
  let component: VerticalnavbarComponent;
  let fixture: ComponentFixture<VerticalnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

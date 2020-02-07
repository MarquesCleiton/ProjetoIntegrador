import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuvidasComponent } from './duvidas.component';

describe('DuvidasComponent', () => {
  let component: DuvidasComponent;
  let fixture: ComponentFixture<DuvidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuvidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuvidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

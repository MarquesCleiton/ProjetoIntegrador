import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhacontaComponent } from './minhaconta.component';

describe('MinhacontaComponent', () => {
  let component: MinhacontaComponent;
  let fixture: ComponentFixture<MinhacontaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhacontaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhacontaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

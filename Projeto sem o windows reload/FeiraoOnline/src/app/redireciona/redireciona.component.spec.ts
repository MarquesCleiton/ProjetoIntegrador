import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirecionaComponent } from './redireciona.component';

describe('RedirecionaComponent', () => {
  let component: RedirecionaComponent;
  let fixture: ComponentFixture<RedirecionaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirecionaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirecionaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabirintoNovoComponent } from './labirinto-novo.component';

describe('LabirintoNovoComponent', () => {
  let component: LabirintoNovoComponent;
  let fixture: ComponentFixture<LabirintoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabirintoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabirintoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

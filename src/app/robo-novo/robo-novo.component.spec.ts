import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboNovoComponent } from './robo-novo.component';

describe('RoboNovoComponent', () => {
  let component: RoboNovoComponent;
  let fixture: ComponentFixture<RoboNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoboNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboEditaComponent } from './robo-edita.component';

describe('RoboEditaComponent', () => {
  let component: RoboEditaComponent;
  let fixture: ComponentFixture<RoboEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoboEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

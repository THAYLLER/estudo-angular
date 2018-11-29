import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboListaComponent } from './robo-lista.component';

describe('RoboListaComponent', () => {
  let component: RoboListaComponent;
  let fixture: ComponentFixture<RoboListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoboListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

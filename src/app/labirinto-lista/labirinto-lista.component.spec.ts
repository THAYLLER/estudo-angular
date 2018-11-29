import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabirintoListaComponent } from './labirinto-lista.component';

describe('LabirintoListaComponent', () => {
  let component: LabirintoListaComponent;
  let fixture: ComponentFixture<LabirintoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabirintoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabirintoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

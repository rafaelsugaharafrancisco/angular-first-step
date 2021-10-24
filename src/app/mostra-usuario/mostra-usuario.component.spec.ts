import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraUsuarioComponent } from './mostra-usuario.component';

describe('MostraUsuarioComponent', () => {
  let component: MostraUsuarioComponent;
  let fixture: ComponentFixture<MostraUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostraUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

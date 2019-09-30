import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaReceitaComponent } from './pagina-receita.component';

describe('PaginaReceitaComponent', () => {
  let component: PaginaReceitaComponent;
  let fixture: ComponentFixture<PaginaReceitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaReceitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SerieDetalhePage } from './serie-detalhe.page';

describe('SerieDetalhePage', () => {
  let component: SerieDetalhePage;
  let fixture: ComponentFixture<SerieDetalhePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SerieDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

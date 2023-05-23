import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtorDetalhePage } from './ator-detalhe.page';

describe('AtorDetalhePage', () => {
  let component: AtorDetalhePage;
  let fixture: ComponentFixture<AtorDetalhePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AtorDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailStartComponent } from './cocktail-start.component';

describe('CocktailStartComponent', () => {
  let component: CocktailStartComponent;
  let fixture: ComponentFixture<CocktailStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

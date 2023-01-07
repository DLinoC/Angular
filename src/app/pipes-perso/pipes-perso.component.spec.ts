import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesPersoComponent } from './pipes-perso.component';

describe('PipesPersoComponent', () => {
  let component: PipesPersoComponent;
  let fixture: ComponentFixture<PipesPersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesPersoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

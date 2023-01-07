import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesDiapoComponent } from './pipes-diapo.component';

describe('PipesDiapoComponent', () => {
  let component: PipesDiapoComponent;
  let fixture: ComponentFixture<PipesDiapoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesDiapoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesDiapoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

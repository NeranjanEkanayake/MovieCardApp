import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMovieCardComponent } from './create-movie-card.component';

describe('CreateMovieCardComponent', () => {
  let component: CreateMovieCardComponent;
  let fixture: ComponentFixture<CreateMovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMovieCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

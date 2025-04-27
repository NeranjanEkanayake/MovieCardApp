import { Component, inject, Input, OnChanges, OnInit, signal, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MovieService, Movie } from '../../Services/movie.service';
@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent implements OnInit, OnChanges {
  // detailsMovie = DetailsMovie;
  @Input() searchTitle: string = '';

  movies = signal<Movie[]>([]);

  private httpClient = inject(HttpClient);

  constructor(private router: Router, private movieService: MovieService) { }
  ngOnInit(): void {
    this.loadDefaultMovies();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchTitle'] && this.searchTitle) {
      this.searchMovie(this.searchTitle);
    }
  }
  loadDefaultMovies() {
    this.movieService.searchListOfMovies('Avengers').subscribe({
      next: (data) => {
        this.movies.set(data.slice(0, 10));
      },
      error: (err) => {
        console.error('Error fetching default movies: ', err);
      }
    });
  }

  searchMovie(title: string) {
    this.movieService.searchListOfMovies(title).subscribe({
      next: (data) => {
        this.movies.set(data);
      },
      error: (err) => {
        console.error('Error fetching movie: ', err);
      }
    });
  }

  onViewDetails(movieId: string) {
    console.log('URL: ', '/movieDetails?id=' + movieId);

    this.router.navigateByUrl('/movieDetails?id=' + movieId);
  }
}

import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Movie, MovieService } from '../../Services/movie.service';

@Component({
  selector: 'app-movie-details',
  imports: [RouterLink],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie = signal<Movie | null>(null);
  movieId!: string | null;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.queryParamMap.get('id');
    console.log('id in movie details: ', this.movieId);
    if (this.movieId) {
      this.getMovieDetails(this.movieId);
    } else {
      console.error('No Movie Id found');
    }
  }

  getMovieDetails(id: string): void {
    this.movieService.getMovieDetails(id).subscribe({
      next: (movieData) => {
        console.log('Ftetched movie details: ', movieData);
        this.movie.set(movieData);
      },
      error: (err) => {
        console.error('Error fetching movie details', err);
      }
    });
  }
}

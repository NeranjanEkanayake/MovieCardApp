import { Component } from '@angular/core';
import { DetailsMovie } from '../../../Shared/Data/dummy-data';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  detailsMovie = DetailsMovie;

  constructor(private router: Router) { }

  onViewDetails(movieId: string) {
    console.log('URL: ', '/movieDetails?id=' + movieId);

    this.router.navigateByUrl('/movieDetails?id=' + movieId);
  }
}

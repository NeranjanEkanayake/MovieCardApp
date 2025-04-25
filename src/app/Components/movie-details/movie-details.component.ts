import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsMovie } from '../../../Shared/Data/dummy-data';
import { Card } from '../../../Shared/models/card.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie!: Card | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movie = DetailsMovie.find(m => m.id === movieId);
    }
  }
}

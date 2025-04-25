import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DetailsMovie } from '../../../Shared/Data/dummy-data';
import { Card } from '../../../Shared/models/card.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-details',
  imports: [RouterLink],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie!: Card | undefined;

  constructor(private route: ActivatedRoute,private modalService: NgbModal) { }

  ngOnInit(): void {
    const movieId = this.route.snapshot.queryParamMap.get('id');
    console.log('id in movie details: ', movieId);
    if (movieId) {
      this.movie = DetailsMovie.find(m => m.id === movieId);
    }
  }
}

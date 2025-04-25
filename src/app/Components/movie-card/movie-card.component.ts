import { Component } from '@angular/core';
import { DetailsMovie } from '../../../Shared/Data/dummy-data';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-movie-card',
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  detailsMovie = DetailsMovie;

  // selectedCardId: string | null = null;

  constructor(private router: Router) { }

  // get selectedCard() {
  //   return this.detailsMovie.find((cardDetail) => cardDetail.id === this.selectedCardId)!;
  // }

  // ngOnInit(): void{
  //   alert('Application Started');
  // }

  // ngAfterViewInit(): void{
  //   alert('Loading movies completed');
  // }
  onViewDetails(movieId: string) {
    this.router.navigate(['/movieDetails', movieId]);
  }
}

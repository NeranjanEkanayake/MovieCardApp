import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { DetailsMovie } from '../../../Shared/Data/dummy-data';

@Component({
  selector: 'app-movie-card',
  imports: [RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  detailsMovie = DetailsMovie;
  selectedCardId = '1card';

  constructor() {
    // this.detailsMovie == null;
    // const cardDetails = localStorage.getItem('moviecards');

    // if(cardDetails){
    //   this.detailsMovie = JSON.parse(cardDetails);
    // }

    console.log('Constructor runs');
  }

  get selectedCard() {
    return this.detailsMovie.find((cardDetail) => cardDetail.id === this.selectedCardId)!;
  }

  // ngOnInit(): void{
  //   alert('Application Started');
  // }

  // ngAfterViewInit(): void{
  //   alert('Loading movies completed');
  // }

  onSelectCard(id: string) {
    this.selectedCardId = id;
    console.log('Selected card with Id: ' + id);
  }
}

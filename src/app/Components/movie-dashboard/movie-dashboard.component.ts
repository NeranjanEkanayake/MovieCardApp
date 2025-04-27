import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { MovieService } from '../../Services/movie.service';

@Component({
  selector: 'app-movie-dashboard',
  imports: [NavbarComponent, MovieCardComponent],
  templateUrl: './movie-dashboard.component.html',
  styleUrl: './movie-dashboard.component.css'
})
export class MovieDashboardComponent {
  searchTitle: string = '';
  searchMovie(title: string) {
    this.searchTitle = title;
  }
}

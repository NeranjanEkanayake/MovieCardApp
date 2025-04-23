import { Component } from '@angular/core';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
@Component({
  selector: 'app-movie-dashboard',
  imports: [MovieDetailsComponent],
  templateUrl: './movie-dashboard.component.html',
  styleUrl: './movie-dashboard.component.css'
})
export class MovieDashboardComponent {

}

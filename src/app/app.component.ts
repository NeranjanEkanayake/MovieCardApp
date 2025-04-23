import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { CreateMovieCardComponent } from './Components/create-movie-card/create-movie-card.component';
import { MovieCardComponent } from './Components/movie-card/movie-card.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MovieCardApp';
}

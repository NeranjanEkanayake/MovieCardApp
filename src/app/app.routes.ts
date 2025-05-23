import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { MovieCardComponent } from './Components/movie-card/movie-card.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { RegisterComponent } from './Components/register/register.component';
import { MovieDashboardComponent } from './Components/movie-dashboard/movie-dashboard.component';
import { CreateMovieCardComponent } from './Components/create-movie-card/create-movie-card.component';

export const routes: Routes = [
    {
        path: '',
        component:MovieDashboardComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'movieDashboard',
        component:MovieDashboardComponent
    },
    {
        path:'movieDetails',
        component:MovieDetailsComponent
    },
    {
        path:'createMovieCard',
        component:CreateMovieCardComponent
    },
    {
        path:'movieCard',
        component:MovieCardComponent
    }
];

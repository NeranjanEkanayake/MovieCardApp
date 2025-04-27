import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Movie {
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
    Type: string;
    Genre: string;
    Plot: string;
}

@Injectable({
    providedIn: 'root'
})

export class MovieService {
    private apiUrl = 'https://www.omdbapi.com/?apikey=3fb6b3b8';

    constructor(private http: HttpClient) { }

    getMovieDetails(title: string): Observable<Movie> {
        return this.http.get<Movie>(`${this.apiUrl}&i=${title}`);
    }

    searchListOfMovies(keyword: string): Observable<Movie[]> {
        return this.http.get<any>(`${this.apiUrl}&s=${keyword}&type=movie`).pipe(
            map(response => response.Search || [])
        );
    }

    getMovieById(id: string) {
        return this.http.get<any>(`${this.apiUrl}&i=${id}`);
    }
}
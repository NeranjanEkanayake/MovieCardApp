import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    private movies: any[] = [];

    constructor() {
        const cardDetails = localStorage.getItem('moviecards');
        if (cardDetails) {
            this.movies = JSON.parse(cardDetails);
        }
    }

    getMovieById(id: string) {
        return this.movies.find(m => m.id === id);
    }
}

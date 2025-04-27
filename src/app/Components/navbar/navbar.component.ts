import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() search = new EventEmitter<string>();

  searchMovie(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const titleInput = form.elements.namedItem('title') as HTMLInputElement;

    if (titleInput && titleInput.value.trim()) {
      const title = titleInput.value.trim();
      this.search.emit(title);
    } else {
      console.warn('Search input is empty or not found.');
    }
  }
}

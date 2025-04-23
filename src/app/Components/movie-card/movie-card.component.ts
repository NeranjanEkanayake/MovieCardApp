import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-movie-card',
  imports: [RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  imageUrl: string = "D:\\Angular Demo\\MovieCardApp\\src\\BackgroundImages\\background.jpg";

  detailsMovie: Card[] = [
    {
      id: 1,
      title: "Movie 1",
      description: "This is the first movie",
      image: "https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_640.jpg"

    },
    {
      id: 2,
      title: "Movie 2",
      description: "This is the Second movie",
      image:"https://cdn.pixabay.com/photo/2018/01/03/01/17/film-3057394_640.jpg"
    },
    {
      id: 3,
      title: "Dragon",
      description: "This is a movie",
      image: "https://imagesvs.oneindia.com/img/2025/02/dragon-movie-review-02-1740098055.jpg"
    },
    {
      id: 4,
      title: "Movie 4",
      description: "This is a movie",
      image:"https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcc0ZFo9RqbhV9jEFrOneG9PnPozeU0qa6Tu5MwCPg49Z_0kKR6ybUo8rsl_MTbNvhhnSK0Zq8Xmki0poO9pmMFyleKgswVmYpY.jpg?r=730"
    },
    {
      id: 5,
      title: "Movie 5",
      description: "This is a movie",
      image:"https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/11/netflix-movies-that-wasted-great-concepts-featured-image.jpg"
    },
    {
      id: 6,
      title: "Movie 6",
      description: "This is a movie",
      image:"https://i.ytimg.com/vi/s4aCsaDvagw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCmTDLswuiIbMn0a68m5s3RkDjBXA"
    },
    {
      id: 7,
      title: "Movie 7",
      description: "This is a movie",
      image:"https://cdn.prod.website-files.com/5de58c94efc1f2cc3db79e7e/67eeff14ff9ec84d66969979_mcb1.jpg"
    },
    {
      id: 8,
      title: "Movie 8",
      description: "This is a movie",
      image:"https://assets.aboutamazon.com/dims4/default/1f3b4b6/2147483647/strip/true/crop/3837x2160+0+0/resize/1320x743!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F23%2F0c%2F05fe396a4ffeb2b13997ebea01e0%2Fmea1-2024-static16x9-payoff-3840x2160-pre-prime-pv-final-en-multi-prico-17255809.jpg"
    },
    {
      id: 9,
      title: "Movie 9",
      description: "This is a movie",
      image:"https://westlakefeatherduster.com/wp-content/uploads/2024/12/moana2_payoff_5787a994.jpeg"
    },
    {
      id: 10,
      title: "Movie 10",
      description: "This is a movie",
      image:"https://m.media-amazon.com/images/I/51BANINoAxL._AC_UF894,1000_QL80_.jpg"
    }
  ];
  /**
   *
   */
  constructor() {
    this.detailsMovie == null;

  }

  ngOnInit(): void{
    alert('Application Started');
  }

  ngAfterViewInit(): void{
    alert('Loading movies completed');
  }
  
}

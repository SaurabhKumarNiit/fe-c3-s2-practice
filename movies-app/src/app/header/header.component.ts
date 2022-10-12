import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../../p2-display-movies/resources/movie';
import { MOVIES } from '../../../../p2-display-movies/resources/movies';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  movies = MOVIES;
  searchText:string = '';
  constructor() { }

  ngOnInit(): void {
  }
  search() {
    if (this.searchText === '' || !this.searchText)
    this.movies = MOVIES;
  else {
    this.movies = MOVIES;
    this.movies = this.movies.filter(movies => movies.movieTitle?.startsWith(this.searchText.toLowerCase()));
  }

  }
  reset() {
    this.searchText = '';
    this.movies = MOVIES;
  }


}

import { Component } from '@angular/core';


interface MovieQuote{
  movie: String,
  quote: String
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movieQuote: MovieQuote ={
    'quote': '',
    'movie': '',
  };
}

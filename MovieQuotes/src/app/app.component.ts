import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
interface MovieQuote{
  movie: string;
  quote: string;
  $key?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  formMovieQuote: MovieQuote ={
    'quote': '',
    'movie': '',
  };

  movieQuotesStream: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase){
    this.movieQuotesStream = db.list('/quotes');
  }

  onSubmit(): void {
    try{
    console.log("submitted: ", this.formMovieQuote);
    this.movieQuotesStream.push(this.formMovieQuote);
    this.formMovieQuote = {
      'quote': '',
      'movie': ''
    };

  } catch (e){
    console.log("Form Error: ", e);
  }

  }
}

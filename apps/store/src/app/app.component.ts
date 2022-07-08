import { Component } from '@angular/core';
import { getAllGames } from '../fake-api';
import { formatRating } from '@bg-hoard/store/util-formatters';
import { HttpClient } from "@angular/common/http";
import { Game } from '@bg-hoard/util-interface';
import { of } from "rxjs";

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Board Game Hoard';

  games = of(getAllGames()); // this.http.get<Game[]>('/api/games');

  formatRating = formatRating;

  constructor(private http: HttpClient) {}
}

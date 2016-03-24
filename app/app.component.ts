import {Component} from 'angular2/core';
import {Beer} from './beer';
import {BeerDetailComponent} from './beer-detail.component';

@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <h2>Our Beers</h2>
        <ul class="beers">
          <li *ngFor="#beer of beers"
            [class.selected]="beer === selectedBeer"
            (click)="onSelect(beer)">
            <span class="badge">{{beer.id}}</span> {{beer.name}}
          </li>
        </ul>
      <my-beer-detail [beer]="selectedBeer"></my-beer-detail>
    `,
  styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .beers {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 14em;
    }
    .beers li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .beers li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .beers li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .beers .text {
      position: relative;
      top: -3px;
    }
    .beers .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  directives: [BeerDetailComponent]
})
export class AppComponent {
  title = 'Tour of Kegs';
  beers = BEERS;
  selectedBeer: Beer;

  onSelect(beer: Beer) { this.selectedBeer = beer; }
}

var BEERS: Beer[] = [
  { "id": 11, "name": "Black Label"},
  { "id": 12, "name": "Rainier"},
  { "id": 13, "name": "Schaefer"},
  { "id": 14, "name": "National Bohemian"},
  { "id": 15, "name": "Old Style"},
];

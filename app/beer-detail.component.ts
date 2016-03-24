import {Component} from 'angular2/core';
import {Beer} from './beer';

@Component({
  selector: 'my-beer-detail',
  template: `
    <div *ngIf="selectedBeer">
      <h2>{{selectedBeer.name}} details!</h2>
      <div><label>id: </label>{{selectedBeer.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedBeer.name" placeholder="name"/>
      </div>
    </div>
  `,
  inputs: ['hero']
})
export class BeerDetailComponent {
  beer: Beer;
}

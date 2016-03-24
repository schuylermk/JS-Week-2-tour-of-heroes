import {Component} from 'angular2/core';

public hero: Hero = {
  id: 1,
  name: 'Windstorm'
};

@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div><label>name: </label>{{hero.name}}</div>
    `

})
export class AppComponent {
  public title = 'Tour of Kegs';
  public hero = 'Windstorm';
}

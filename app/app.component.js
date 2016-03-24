System.register(['angular2/core', './beer-detail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, beer_detail_component_1;
    var AppComponent, BEERS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (beer_detail_component_1_1) {
                beer_detail_component_1 = beer_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Kegs';
                    this.beers = BEERS;
                }
                AppComponent.prototype.onSelect = function (beer) { this.selectedBeer = beer; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n      <h1>{{title}}</h1>\n      <h2>Our Beers</h2>\n        <ul class=\"beers\">\n          <li *ngFor=\"#beer of beers\"\n            [class.selected]=\"beer === selectedBeer\"\n            (click)=\"onSelect(beer)\">\n            <span class=\"badge\">{{beer.id}}</span> {{beer.name}}\n          </li>\n        </ul>\n      <my-beer-detail [beer]=\"selectedBeer\"></my-beer-detail>\n    ",
                        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .beers {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 14em;\n    }\n    .beers li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .beers li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .beers li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .beers .text {\n      position: relative;\n      top: -3px;\n    }\n    .beers .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "],
                        directives: [beer_detail_component_1.BeerDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            BEERS = [
                { "id": 11, "name": "Black Label" },
                { "id": 12, "name": "Rainier" },
                { "id": 13, "name": "Schaefer" },
                { "id": 14, "name": "National Bohemian" },
                { "id": 15, "name": "Old Style" },
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map
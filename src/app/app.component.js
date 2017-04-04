"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Power = (function () {
    function Power() {
    }
    return Power;
}());
exports.Power = Power;
var HEROES = [
    { id: 11, name: 'Mr. Nice', health: 100 },
    { id: 12, name: 'Narco', health: 100 },
    { id: 13, name: 'Bombasto', health: 100 },
    { id: 14, name: 'Celeritas', health: 120 },
    { id: 15, name: 'Magneta', health: 100 },
    { id: 16, name: 'RubberMan', health: 120 },
    { id: 17, name: 'Dynama', health: 100 },
    { id: 18, name: 'Dr IQ', health: 100 },
    { id: 19, name: 'Magma', health: 140 },
    { id: 20, name: 'Tornado', health: 100 }
];
var POWERS = [
    { id: 1, name: 'aaa', damage: 0 },
    { id: 2, name: 'bbb', damage: 0 },
    { id: 3, name: 'ccc', damage: 0 }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.end = 'Hero.com';
        this.heroes = HEROES;
        this.powers = POWERS;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent.prototype.onChangeObj = function (power) {
        switch (power.name) {
            case 'aaa':
                console.log('aaa');
                power.damage = Math.floor((Math.random() * 8) + 5);
                break;
            case 'bbb':
                console.log('bbb');
                power.damage = Math.floor((Math.random() * 10) + 4);
                break;
            case 'ccc':
                console.log('ccc');
                power.damage = Math.floor((Math.random() * 12) + 3);
                break;
            default:
                break;
        }
        this.selectedPower = power;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n\n    <hero-detail [hero]=\"selectedHero\"></hero-detail>\n\n    <div *ngIf=\"selectedPower && selectedHero\">\n      <h2>{{selectedPower.name}}</h2>\n      <label>Damage: </label>{{selectedPower.damage}}\n    </div>\n\n    <div id=\"attributes\">\n      <div>\n       <h2>My Heroes</h2>\n        <div class=\"heroes\" *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\">\n          <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n        </div>\n      </div>\n\n      <div>\n        <h2>Powers</h2>\n        <!--<div id=\"attr\" class=\"heroes\" *ngFor=\"let power of powers\" (click)=\"onSelectP(power)\">\n          <span>{{power.name}}</span>\n        </div>-->\n        <select [ngModel]=\"selectedPower\" (ngModelChange)=\"onChangeObj($event)\">\n          <option [ngValue]=\"power\" *ngFor=\"let power of powers\">{{power.name}}</option>\n        </select>\n      </div>\n    </div>\n\n    <h3>&copy;{{end}}</h3>\n    ",
        styles: ["\n      .selected {\n        background-color: #CFD8DC !important;\n        color: white;\n      }\n      .heroes {\n        margin: 0 0 0 0;\n        list-style-type: none;\n        padding: 0;\n        width: 15em;\n      }\n      div.heroes {\n        cursor: pointer;\n        position: relative;\n        left: 0;\n        background-color: #cecece;\n        margin: .5em;\n        padding: .3em 0;\n        height: 1.6em;\n        border-radius: 4px;\n        color: black;\n      }\n      div#attr {\n        cursor: pointer;\n        position: relative;\n        left: 0;\n        background-color: #cecece;\n        margin: .5em;\n        padding: .3em 0;\n        height: 1.6em;\n        border-radius: 4px;\n        color: black;\n        text-align: center;\n      }\n      .heroes li.selected:hover {\n        background-color: #BBD8DC !important;\n        color: white;\n      }\n      .heroes li:hover {\n        color: #607D8B;\n        background-color: #DDD;\n        left: .1em;\n      }\n      .heroes .text {\n        position: relative;\n        top: -3px;\n      }\n      .heroes .badge {\n        display: inline-block;\n        font-size: small;\n        color: white;\n        padding: 0.8em 0.7em 0 0.7em;\n        background-color: #3587af;\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -4px;\n        height: 1.8em;\n        margin-right: .8em;\n        border-radius: 4px 0 0 4px;\n      }\n    "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
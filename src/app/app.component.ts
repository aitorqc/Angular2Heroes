import { Component } from '@angular/core';
import { SelectModule } from 'ng2-select';

export class Hero {
  id: number;
  name: string;
  health: number;
}

export class Power{
  id: number;
  name: string;
  damage: number;
} 

const HEROES: Hero[] = [
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

const POWERS: Power[] = [
  {id: 1, name: 'aaa', damage: Math.floor((Math.random() * 10) + 5)},
  {id: 2, name: 'bbb', damage: Math.floor((Math.random() * 14) + 2)},
  {id: 3, name: 'ccc', damage: Math.floor((Math.random() * 7) + 4)}
] 

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>

    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}}</h2>
      <div>
        <label>id: </label>{{selectedHero.id}}
      </div>
      <div>
        <label>Name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name">
      </div>
      <div>
        <label>Health: </label>{{selectedHero.health}}
      </div>
    </div>

    <div>
      <h2>My Heroes</h2>
      <div class="heroes" *ngFor="let hero of heroes" (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </div>

      <h2>Powers</h2>
      <select>
        <option  *ngFor="let power of powers" [ngValue]="power">{{power.name}}</option>
      </select>
    </div>

    <h3>&copy;{{end}}</h3>
    `,
    styles: [`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .heroes {
        margin: 0 0 0 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      div.heroes {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #cecece;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
        color: black;
      }
      .heroes li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .heroes li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .heroes .text {
        position: relative;
        top: -3px;
      }
      .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #3587af;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
    `]
})

export class AppComponent {
  title = 'Tour of Heroes';
  end = 'Hero.com';

  heroes = HEROES;
  selectedHero: Hero;

  powers = POWERS;
  selectedPower: Power;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  // onSelect(power: Power){
  //   this.selectedPower = power;
  // }
    
}


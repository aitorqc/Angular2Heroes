import { Component } from '@angular/core';
import { Hero } from './hero';
import { Power } from './power'
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>

    <hero-detail [hero]="selectedHero" [power]="selectedPower"></hero-detail>

    <div id="attributes">
      <div>
       <h2>My Heroes</h2>
        <div class="heroes" *ngFor="let hero of heroes" (click)="onSelect(hero)">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </div>
      </div>

      <div>
        <h2>Powers</h2>
        <!--<div id="attr" class="heroes" *ngFor="let power of powers" (click)="onSelectP(power)">
          <span>{{power.name}}</span>
        </div>-->
        <select [ngModel]="selectedPower" (ngModelChange)="onChangeObj($event)">
          <option [ngValue]="power" *ngFor="let power of powers">{{power.name}}</option>
        </select>
      </div>
    </div>

    <h4>&copy;{{end}}</h4>
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
      div#attr {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #cecece;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
        color: black;
        text-align: center;
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
    `],
providers: [HeroService]
})

export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  end = 'Hero.com';

  heroes: Hero[];
  powers: Power[];  
  
  selectedHero: Hero;
  selectedPower: Power;

  constructor(private heroService: HeroService) { }

  getHeroes(): void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.heroService.getPowers().then(powers => this.powers = powers);
  }

  ngOnInit(): void{
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  onChangeObj(power: Power): void {
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
  }

}


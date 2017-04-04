import { Component, Input } from '@angular/core';
import { Hero } from './hero'
import { Power } from './power'

@Component({
    selector: 'hero-detail',
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}}</h2>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name"/>
            </div>
        </div>

        <div *ngIf="power && hero">
            <h2>{{power.name}}</h2>
            <label>Damage: </label>{{power.damage}}
        </div>
        `
})

export class HeroDetailComponent {
    @Input() hero: Hero;
    @Input() power: Power;
}
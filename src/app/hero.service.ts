import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Power } from './power';
import { HEROES } from './mock-heroes';
import { POWERS } from './mock-heroes';

@Injectable()
export class HeroService {

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getPowers(): Promise<Power[]> {
        return Promise.resolve(POWERS);
    }

}
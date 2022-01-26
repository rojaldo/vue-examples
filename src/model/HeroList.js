// import Hero from './Hero';

export class HeroList {
    heroes = [];
    constructor(...heroes) {
        this.heroes = [];
        heroes.forEach(hero => this.addHero(hero));
    }

    addHero(hero) {
        // if (!(hero instanceof Hero)) {
        //     throw new Error('Invalid parameter');
        // }
        this.heroes.push(hero);
    }
}
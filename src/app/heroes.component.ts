import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Hero} from './Hero';
import {HeroService} from './hero.service';



/*const HEROES: Hero[] = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];*/

@Component({
  moduleId: 'module.id',
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  //title = 'Tour of heroes!';
  /*hero : Hero = {
    id:1, name: 'windstorm'
  };*/
  //heroes = HEROES;
  heroes: Hero[];
  selectedHero: Hero;
  
  onSelect(hero:Hero) : void {
    this.selectedHero = hero;
  }
  
  constructor(private router: Router, private heroService: HeroService){}
  
  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    
  }
  
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  
  
  add(name:string): void {
    name = name.trim();
    if(!name){return;}
    
    this.heroService.create(name)
        .then(hero => {
          this.heroes.push(hero);
          this.selectedHero = null;
        });
  
  }
  
  
  delete(hero: Hero): void {
  this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

  
  ngOnInit() : void{
    this.getHeroes();
  }

  
}

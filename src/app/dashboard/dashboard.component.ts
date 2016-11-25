import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../Hero';

@Component({
  selector: 'app-dashboard',
  moduleId: 'module.id',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  heroes: Hero[] = [];
  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1,5));
  }

}

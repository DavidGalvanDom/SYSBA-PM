import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-project',
  templateUrl: 'project.component.html',
  styleUrls: ['project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(
    private router: Router) { }


  ngOnInit() {
  }

  onSelect() {
    //this.router.navigate( ['HeroDetail', { id: hero.id }] );
    //this.router.navigate( ['/'] );
    this.router.navigateByUrl('/');
  }
}

import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'app-project',
  templateUrl: 'project.component.html',
  styleUrls: ['project.component.css'],
  directives: [MD_INPUT_DIRECTIVES, MD_CARD_DIRECTIVES]
})
export class ProjectComponent implements OnInit {
  vm: Object = {};

  constructor(
    private router: Router) { }


  ngOnInit() {
  }

  onSelect() {
    //this.router.navigate( ['HeroDetail', { id: hero.id }] );
    //this.router.navigate( ['/'] );
    this.router.navigateByUrl('/');
  }

   onSubmitTemplateBased() {
        console.log(this.vm);
    }
}

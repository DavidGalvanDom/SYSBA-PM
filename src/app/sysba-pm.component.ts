import { Component, ViewEncapsulation } from '@angular/core';
import { ProjectComponent } from './+project';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';


@Component({
  moduleId: module.id,
  selector: 'sysba-pm-app',
  templateUrl: 'sysba-pm.component.html',
  styleUrls: ['sysba-pm.component.css'],
  directives: [ROUTER_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MdIcon],
  providers: [ROUTER_PROVIDERS],
  viewProviders: [MdIconRegistry]
})

@Routes([
  {path: '/project', component: ProjectComponent}
])
export class SYSBAPMAppComponent {
  title = 'Sysba PM';

  constructor(mdIconRegistry: MdIconRegistry,
            private router: Router) {
    mdIconRegistry
       .addSvgIcon('thumb-up', '/node_modules/mdi/fonts/materialdesignicons-webfont.svg');       
  }

  Projecto() {
    this.router.navigateByUrl('/project');
  }
}

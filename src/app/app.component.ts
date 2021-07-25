import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private menu: MenuController,
    private router: Router
  ) {}

  onMenuClick(){
    this.menu.close();
  }

  findEvent(){
    this.router.navigate(['searchevent']);
  }

  about(){
    this.router.navigate(['about']);

  }
}

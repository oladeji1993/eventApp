import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
// import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  appName;
  packageName;
  versionCode;
  versionNumber;

  constructor( private router: Router,
    private menu: MenuController,
     ) {

     }


     ngOnInit() {
    };


  goToDashboard(){
    this.router.navigate(['dashboard']);
  }


  toggleMenu(){
    this.menu.enable(true, 'menu-content');
      this.menu.open('menu-content');
  }

  goToDetails(){

  }

}

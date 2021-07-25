import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { MessengerService } from 'src/app/service/messenger.service';

@Component({
  selector: 'app-searchevent',
  templateUrl: './searchevent.page.html',
  styleUrls: ['./searchevent.page.scss'],
})
export class SearcheventPage implements OnInit {
  events: any = [];
  term: string;
  constructor(
    private router: Router,
    private menu: MenuController,
    private messenger: MessengerService
  ) { }

  ngOnInit() {
    this.fetchEvents();
  }

  goToDashboard(){
    this.router.navigate(['dashboard']);
  }


  toggleMenu(){
      this.menu.enable(true, 'menu-content');
      this.menu.open('menu-content');
  }

  goToDetails(){

  };


  fetchEvents(){
    this.messenger.events().subscribe(response =>{
      // console.log(response);
      this.events = response;
    });
  }

}

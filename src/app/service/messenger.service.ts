import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  endpoint = 'https://rest.bandsintown.com/artists/King%20sunny%20ade/events?app_id=1&date=2010%2F1%2F1';

  constructor(
    private http: HttpClient
  ) { }

  events(){
    return this.http.get(this.endpoint);
  }

}

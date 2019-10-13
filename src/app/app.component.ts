import { Component, OnInit } from '@angular/core';
import { HttpService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _http: HttpService) {}
  ngOnInit() {
    this._http.accessApi()
  }
}
 
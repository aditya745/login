 
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import {stringify} from 'qs'
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  postData = stringify({
    grant_type: 'password',
    username: 'creditorapp',
    password: 'MwDqpNE2rjVoN3fS',
  });
  url = `https://api.stage.ktilaskutus.fi/v1/oauth/token`;
  constructor(private http: HttpClient) { }

  accessApi() {
    this.http.post(this.url, this.postData, {headers: {"content-type": "application/x-www-form-urlencoded"}} ).toPromise().then((data:any) => {
      console.log(data);
    });
  }
}

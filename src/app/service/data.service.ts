import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, tap } from "rxjs/operators";
import { qs, stringify } from "qs";
@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}
  postData = stringify({
    grant_type: "password",
    username: "creditorapp",
    password: "MwDqpNE2rjVoN3fS"
  });
  url = `https://api.stage.ktilaskutus.fi/v1/oauth/token`;
  json;

  login() {
    return this.http
      .post(this.url, this.postData, {
        headers: { "content-type": "application/x-www-form-urlencoded" }
      })
      .pipe(
        map((res: Response) => {
          this.json = JSON.stringify(res.json);
        })
      );
  }
}

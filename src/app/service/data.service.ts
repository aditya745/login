import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { stringify } from "qs";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private Http: HttpClient) {}
  Authentication(username: string, password: string) {
    let json = stringify({
      grant_type: "password",
      username: "creditorapp",
      password: "MwDqpNE2rjVoN3fS"
    });
    return this.Http.post(
      "https://api.stage.ktilaskutus.fi/v1/oauth/token",
      json,
      { headers: { "content-type": "application/x-www-form-urlencoded" } }
    );
  }
}

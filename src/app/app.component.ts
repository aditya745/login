import { Component, OnInit } from "@angular/core";
import { AuthService } from "./service/data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  private username = "";
  private password = "";
  constructor(private _http: AuthService) {}
  ngOnInit() {
    this._http.Authentication(this.username, this.password).subscribe(data => {
      console.log({data})
      if (data.access_token != null) {
        // retreive the access token from the server
        console.log('token', data.access_token);
        // store the token in the localStorage
        localStorage.setItem("access-token", data.access_token);
      } else {
        console.log("check your credentials !!");
      }
    });
  }
}

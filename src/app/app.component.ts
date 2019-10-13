import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { DataService } from "./service/data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private fb: FormBuilder, private dataSevice: DataService) {}

  registrationForm = this.fb.group({
    email: ["", Validators.required],
    password: [""],
    confirmPassword: [""]
  });

  ngOnInIt() {
    this.dataSevice.login().subscribe(data => {
      console.log(data);
    });
  }
}

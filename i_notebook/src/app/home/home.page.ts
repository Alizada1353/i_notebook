import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  flag = false;
  default = "black";
  selected = "blue";
  constructor() {}

  changeColor() {
    this.flag = !this.flag;
  }
}

import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ServiceService } from "../service.service";

@Component({
  selector: "app-service",
  templateUrl: "./service.component.html",
  styleUrls: ["./service.component.css"]
})
export class ServiceComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

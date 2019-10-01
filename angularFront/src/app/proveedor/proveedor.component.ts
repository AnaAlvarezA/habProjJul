import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-proveedor",
  templateUrl: "./proveedor.component.html",
  styleUrls: ["./proveedor.component.css"]
})
export class ProveedorComponent implements OnInit {
  userInfo: any;
  board: string;
  errorMessage: string;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getProveedorBoard().subscribe(
      data => {
        this.userInfo = {
          name: data.user.name,
          email: data.user.email
        };
        this.board = data.description;
      },
      error => {
        this.errorMessage = `${error.status}: ${error.error}`;
      }
    );
  }
}

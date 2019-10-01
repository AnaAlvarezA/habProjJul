import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private clienteUrl = "http://localhost:3000/api/test/cliente";
  private proveedorUrl = "http://localhost:3000/api/test/proveedor";
  private adminUrl = "http://localhost:3000/api/test/admin";

  constructor(private http: HttpClient) {}

  getClienteBoard(): Observable<any> {
    return this.http.get(this.clienteUrl);
  }

  getProveedorBoard(): Observable<any> {
    return this.http.get(this.proveedorUrl);
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.adminUrl);
  }
}

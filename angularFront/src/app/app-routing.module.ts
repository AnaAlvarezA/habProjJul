import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ClienteComponent } from "./cliente/cliente.component";
import { ProveedorComponent } from "./proveedor/proveedor.component";
import { AdminComponent } from "./admin/admin.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "cliente",
    component: ClienteComponent
  },
  {
    path: "proveedor",
    component: ProveedorComponent
  },
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: "auth/login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: RegisterComponent
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

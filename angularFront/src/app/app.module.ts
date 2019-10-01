import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { ClienteComponent } from "./cliente/cliente.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./admin/admin.component";
import { ProveedorComponent } from "./proveedor/proveedor.component";

import { httpInterceptorProviders } from "./auth/auth-interceptor";
import { HeaderComponent } from "./layout/header/header.component";
import { MainComponent } from "./layout/main/main.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { ServiceComponent } from "./service/service.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClienteComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    ProveedorComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ServiceComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}

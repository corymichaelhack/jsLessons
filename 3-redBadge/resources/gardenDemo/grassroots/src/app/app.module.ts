import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatabaseService } from './services/database.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductsComponent,
    HomeComponent,
    AuthComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [DatabaseService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './compenents/navbar/navbar.component';
import { TachesComponent } from './compenents/taches/taches.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { FooterComponent } from './compenents/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TachesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

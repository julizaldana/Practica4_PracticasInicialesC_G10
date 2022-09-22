import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { IngFormComponent } from './components/ing-form/ing-form.component';
import { IngListComponent } from './components/ing-list/ing-list.component';

import {IngService} from "./services/ing.service"

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IngFormComponent,
    IngListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    IngService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

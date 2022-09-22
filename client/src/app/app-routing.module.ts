import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {IngListComponent} from "./components/ing-list/ing-list.component";
import {IngFormComponent} from "./components/ing-form/ing-form.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {path: "",
  redirectTo: "/ing/login",
  pathMatch: "full"},
  {
    path: "ing",
    component: IngListComponent
  },
  {
    path: "ing/add",
    component: IngFormComponent
  }
  ,
  {
    path: "ing/login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

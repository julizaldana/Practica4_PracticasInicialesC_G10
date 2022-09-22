import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ing,Login} from "../models/ing";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngService {
  API_URI = "http://localhost:3000/api"

  constructor(private http: HttpClient) { }

  getIngs(){
    return this.http.get(`${this.API_URI}/publis`);
  }

  getIng(curso_catedratico: string){
    return this.http.get(`${this.API_URI}/publis/${curso_catedratico}`);
  }

  deleteIng(id: string){
    return this.http.delete(`${this.API_URI}/publis/${id}`);
  }

  saveIng(ing: Ing){
    return this.http.post(`${this.API_URI}/publis`, ing);
  }

  updateIng(id: string, updatedIng: Ing): Observable<Ing>{
    return this.http.put(`${this.API_URI}/publis/${id}`, updatedIng);
  }
  
  usuario = "";
  saveUser(login: Login){
    return this.http.post(`${this.API_URI}/user`,login)
  }
  logUser(carne:any, passw:any, correo:any){
  }
  setUser(user: any){
    this.usuario = user
  }
  getUser(){
    return this.usuario
  }

}

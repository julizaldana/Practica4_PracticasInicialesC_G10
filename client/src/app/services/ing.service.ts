import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ing} from "../models/ing";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngService {
  API_URI = "http://localhost:300/api"

  constructor(private http: HttpClient) { }

  getIngs(){
    return this.http.get(`${this.API_URI}/ing`);
  }

  getIng(id: string){
    return this.http.get(`${this.API_URI}/ing/${id}`);
  }

  deleteIng(id: string){
    return this.http.delete(`${this.API_URI}/ing/${id}`);
  }

  saveIng(ing: Ing){
    return this.http.post(`${this.API_URI}/ing`, ing);
  }

  updateIng(id: string, updatedIng: Ing): Observable<Ing>{
    return this.http.put(`${this.API_URI}/ing/${id}`, updatedIng);
  }

}

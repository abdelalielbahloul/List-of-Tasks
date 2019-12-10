import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tache } from '../models/tache';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  apiURL = "http://localhost:3000/taches";

  constructor( private http: HttpClient) { }

  _findAll(){
    return this.http.get<Tache[]>(this.apiURL);
  }
  delete(id){
    return this.http.delete(`${this.apiURL}/${id}`);
  }
  _envoyer(tache){
    return this.http.post<Tache>(this.apiURL, tache);
  }

  _modofier(tache){
    return this.http.put(`${this.apiURL}/${tache.id}`, tache);
  }


}

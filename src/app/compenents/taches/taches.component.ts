import { Component, OnInit } from '@angular/core';
import { TacheService } from 'src/app/services/tache.service';
import { Tache } from 'src/app/models/tache';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent implements OnInit {

  searchText = '';

  showForm = false;

  editForm = false;

  maTache: Tache = {
    title : '',
    author : ''
  }
  taches : Tache[] = [];
  resultSearch : Tache[] = [];

  constructor(private tacheServices: TacheService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.tacheServices._findAll()
      .subscribe(taches => {
        this.resultSearch = this.taches = taches;
      });
  }
  deleteTache(id){
    this.tacheServices.delete(id)
      .subscribe(() => {
          this.taches = this.taches.filter(tache => tache.id != id);
      })
  }

  envoyer(){
    this.tacheServices._envoyer(this.maTache)
      .subscribe((tache) => {
        this.taches = [tache, ...this.taches];
      })
      this.rest();
      this.showForm = false;
  }
  rest(){
    this.maTache = {
      title : '',
      author : ''
    }
  }
  edit(tache){
    this.maTache = tache;
    this.editForm = true;
  }
  modifier(){
    this.tacheServices._modofier(this.maTache)
        .subscribe(tache => {
          this.editForm = false;
          this.rest();
        })
  }

  Rechercher(){
    this.resultSearch = this.taches.filter((tache) => tache.title.toLocaleUpperCase().includes(this.searchText.toLocaleUpperCase()));
  }

}

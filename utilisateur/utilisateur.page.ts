import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.page.html',
  styleUrls: ['./utilisateur.page.scss'],
})
export class UtilisateurPage implements OnInit {
	utilisateurs = [];

  constructor(
    public afDB: AngularFireDatabase) {
    this.getUtilisateurs(); }

getUtilisateurs(){
				  this.afDB.list('utilisateurs/').snapshotChanges(['child_added']).subscribe(actions=> {
    this.utilisateurs = [];
    actions.forEach(action => {
	    prenom: action.payload.exportVal().prenom,
	    nom: action.payload.exportVal().nom,
	    adresse: action.payload.exportVal().adresse,
	    numero: action.payload.exportVal().numero,
	    niveaux: action.payload.exportVal().niveaux,
	    matiere: action.payload.exportVal().matiere,
	    email: action.payload.exportVal().email,
	    password: action.payload.exportVal().password,
	  });
    });
  });
}


  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

	formulaire = {nom:"",
			prenom:"" ,
			nom:"" ,
			adresse:"",
			telephone:"",
			niveaux:"",
			matiere:"",
			email:"",
			password:"" };

	constructor(    
	public afDB: AngularFireDatabase) { }

	ajouterProf() {
		this.afDB.list('professeur/').push({
			prenom:this.formulaire.prenom ,
			prenom:this.formulaire.nom ,
			adresse:this.formulaire.adresse,
			telephone:this.formulaire.telephone,
			niveaux:this.formulaire.niveaux,
			matiere:this.formulaire.matiere,
			email:this.formulaire.email,
			password:this.formulaire.password 
		});
	}

  ngOnInit() {}

}

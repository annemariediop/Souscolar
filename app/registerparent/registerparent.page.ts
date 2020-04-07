import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import 'firebase/auth';

@Component({
  selector: 'app-registerparent',
  templateUrl: './registerparent.page.html',
  styleUrls: ['./registerparent.page.scss'],
})
export class RegisterparentPage implements OnInit {

 credentials={email:"",password:""};

  constructor(public afDB: AngularFireDatabase,
    private authService: AuthService,
  private alertCtrl: AlertController,
  private router: Router) { }

  ngOnInit() {
  }

  // registerForm(){
  //   //console.log(this.formulaire);
  //   this.afDB.list('User/').push({
  //   nom: this.formulaire.nom,
  //   prenom: this.formulaire.prenom,
  //   numTel: this.formulaire.numTel,
  //   mail: this.formulaire.mail,
  //   password: this.formulaire.password,
  //   adresse1: this.formulaire.adresse1,
  //   adresse2: this.formulaire.adresse2,
  //   ville: this.formulaire.ville,
  //   codePostal: this.formulaire.codePostal
    
	// });
  // }

  async SignIn(credentials): Promise<void> {
    this.authService.RegisterUser(credentials.email, credentials.password).then(
      () => {
        this.authService.SendVerificationMail()
        this.router.navigate(['verify-email']);
        this.router.navigateByUrl('login-page');
      },
      async error => {
        const alert = await this.alertCtrl.create({
          message: error.message,
          buttons: [{ text: 'Ok', role: 'cancel' }],
        });
        await alert.present();
      }
    );
  }


  async GoogleAuth(): Promise<void> {
    this.authService.GoogleAuth().then(
      () => {
        this.router.navigateByUrl('home1');
      },
      async error => {
        const alert = await this.alertCtrl.create({
          message: error.message,
          buttons: [{ text: 'Ok', role: 'cancel' }],
        });
        await alert.present();
      }
    );
  }
}



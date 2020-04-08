import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import 'firebase/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public nav: NavController,
    afDB: AngularFireDatabase,
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  async login(credentials): Promise<void> {
    this.authService.login(credentials.email, credentials.password).then(
      (
       res => {
      	console.log(res);
      	this.navCtrl.navigateForward('/accueil');	
	},
       err => reject(err))
      )},

      async error => {
        const alert = await this.alertCtrl.create({
          message: error.message,
          buttons: [{ text: 'Ok', role: 'cancel' }],
        });
        await alert.present();
      }
    );
  }
  ngOnInit() {}

  
}

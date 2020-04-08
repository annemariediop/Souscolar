import * as firebase from 'firebase/app';

import { Component, OnInit } from '@angular/core';


import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import 'firebase/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
 

  constructor(
    public nav: NavController,
    afDB: AngularFireDatabase,
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController) {
      

    //this.items = afDB.list('User').valueChanges();
   // let items=this.items;
  //  for(let item of this.items) {
  //     if(item.mail==this.ids.mail ){
  //       this.nav.navigateRoot('/accueil');;
  //     }
  //  }
  
  }


  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        if(this.authService.isEmailVerified) {
          this.router.navigate(['home1']);          
        } else {
          window.alert('Email is not verified')
          return false;
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }
  ngOnInit() {
  }

}



import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firebaseService: FirebaseService,
    public afAuth: AngularFireAuth
  ) { }


  login(
    email:string,
    password:string
  ): Promise<firebase.auth.UserCredential> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  resetPassword(email:string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser():Promise<void> {
    return firebase.auth().signOut();
  }
}

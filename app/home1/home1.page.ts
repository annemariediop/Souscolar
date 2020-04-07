import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AdresseService } from './../shared/adresse.service';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page implements OnInit {
  //formulaire={ adresse1:"", adresse2:"", ville:"", codePostal:""};
  adresseForm: FormGroup;
  //userid:string=auth().currentUser.uid;
 
  constructor(
    private adrService: AdresseService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.adresseForm = this.fb.group({
      adresse1: [''],
      adresse2: [''],
      ville: [''],
      codePostal: ['']
    })
  }

  formSubmit() {
    if (!this.adresseForm.valid) {
      return false;
    } else {
      this.adrService.createAdresse(this.adresseForm.value).then(res => {
        console.log(res)
        this.adresseForm.reset();
        this.router.navigate(['/home2']);
      })
        .catch(error => console.log(error));
    }
  }
}
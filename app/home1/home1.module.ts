import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Home1PageRoutingModule } from './home1-routing.module';

import { Home1Page } from './home1.page';
//import { NavController, NavParams } from '@ionic/angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Home1PageRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [Home1Page]
})
export class Home1PageModule {  

  //cryptos: any = [];
  constructor() {
    // this.cryptos = [
    //   { 'name': 'Bitcoin'},
    //   { 'name': 'Ethereum'},
    //   { 'name': 'Ripple'},
    //   { 'name': 'Bitcoin Cash'},
    //   { 'name': 'EOS'},
    //   { 'name': 'Litecoin'},
    //   { 'name': 'Cardano' },
    //   { 'name': 'Stellar'},
    //   { 'name': 'IOTA'},
    //   { 'name': 'NEO' }
    // ];
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SettingPage');
  }


import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { ConfiguracaoJogoService } from '../../services/domain/configuracao-jogo.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,


    ) {}

  }





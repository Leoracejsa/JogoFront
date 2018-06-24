import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { ConfiguracaoJogoService } from '../../services/domain/configuracao-jogo.service';

/**
 * Generated class for the FormTemaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form-tema',
  templateUrl: 'form-tema.html',
})
export class FormTemaPage {
  formGroup: FormGroup;
  temas = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCtrl:AlertController,
    public configuracaoJogoService:ConfiguracaoJogoService) {

    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]]


    });
  }
  ionViewDidLoad(){
    this.configuracaoJogoService.obterTemas().subscribe(res=>{
      this.temas = res;
      console.log('temas',this.temas);

    })
  }

  definifirTema(){
    this.configuracaoJogoService.cadastrarTema(this.formGroup.value)
    .subscribe(response=>{
      this.alertSucessoCadastro()
    },
  error =>{});
    }



  alertSucessoCadastro(){
    let alert = this.alertCtrl.create({
      title:'Success!',
      message:'Theme set!',
      enableBackdropDismiss:false,
      buttons:[
        {
          text:'Ok',
          handler:() =>{
            this.navCtrl.setRoot(HomePage);
          }
        }
      ]
    });
    alert.present();
  }


}

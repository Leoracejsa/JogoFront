import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import { ConfiguracaoJogoService } from '../../services/domain/configuracao-jogo.service';

/**
 * Generated class for the TelaJogoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tela-jogo',
  templateUrl: 'tela-jogo.html',
})
export class TelaJogoPage {
  mensagensUltimaCasa: any;
  temas: any;
  respostaTransformadaJson: any;
  formGroup: FormGroup;
  configuracaoInicialJogo;
  configuracaoCores
  perguntas;
  jogoIniciou = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public configuracaoJogoService:ConfiguracaoJogoService,
    public loadingCtrl:LoadingController,
    public alertCtrl:AlertController
  ) {

    this.formGroup = this.formBuilder.group({
      quantityHouses: ['', [Validators.required]],
      quantityPlayers: ['', [Validators.required]],
      name: ['', [Validators.required]],
      theme: ['', [Validators.required]]


    });
  }

  ionViewDidLoad() {
    this.carregarTemas()
  }
  iniciarJogo(){
    this.configuracaoJogoService.iniciarJogo(this.formGroup.value).subscribe((res)=>{
      this.respostaTransformadaJson = JSON.parse(res.body);
      console.log(this.respostaTransformadaJson)
      this.configuracaoInicialJogo = this.respostaTransformadaJson[0];
      this.configuracaoCores = this.respostaTransformadaJson[1];
      this.perguntas = this.respostaTransformadaJson[0].questoes;
      this.mensagensUltimaCasa = this.respostaTransformadaJson[1].mensagensUltimaCasa


      console.log('this.configuracaoInicialJogo',this.configuracaoInicialJogo);

      console.log('this.configuracaoCores',this.configuracaoCores);

      console.log('this.perguntas',this.perguntas);
      this.loadingJogo()
    })
  }

  loadingJogo() {
    let loading = this.loadingCtrl.create({
      content: 'Loading game...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.jogoIniciou = true
    }, 1500);
  }
  carregarTemas() {
    this.configuracaoJogoService.obterTemas().subscribe(res => {
      this.temas = res;
      console.log(this.temas);
    });
  }
  showBonus(bonus){
    if(bonus){
      this.alertSucessoCadastro()
    }
  }
  alertSucessoCadastro(){
    let alert = this.alertCtrl.create({
      title:'Bonus House, Enjoy!',
      buttons:[
        {
          text:'Ok'
        }
      ]
    });

    alert.present();
  }

}

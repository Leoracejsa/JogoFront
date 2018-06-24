import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ConfiguracaoJogoService } from "./../../services/domain/configuracao-jogo.service";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController } from "ionic-angular";
import { HomePage } from "../home/home";

/**
 * Generated class for the FormQuestoesJogoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-form-questoes-jogo",
  templateUrl: "form-questoes-jogo.html"
})
export class FormQuestoesJogoPage {
  temas = [];
  dificuldades = [];
  formGroup: FormGroup;
  quantidadeResposta = [];
  teste = []
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public configuracaoJogoService: ConfiguracaoJogoService,
    public alertCtrl:AlertController
  ) {
    this.formGroup = this.formBuilder.group({
      difficulty: [null, [Validators.required]],
      statement: [null, [Validators.required]],
      theme: [null],
      resposta: [null],
      respostaCerta: [null],
      opcoes: [null]
    });
    this.quantidadeResposta = [{}];
  }

  ionViewDidLoad() {
    this.carregarTemas();
    this.carregarCores();
  }

  carregarTemas() {
    this.configuracaoJogoService.obterTemas().subscribe(res => {
      this.temas = res;
      console.log(this.temas);
    });
  }

  carregarCores() {
    this.configuracaoJogoService.obterDificuldades().subscribe(res => {
      this.dificuldades = res;
    });
  }
  confirmarResposta(){
    this.teste
    .push({resposta:this.formGroup.value.resposta,respostaCerta:this.formGroup.value.respostaCerta})

    console.log(this.teste);


  }
  enviarQuestao() {
     this.formGroup.removeControl('respostaCerta')
     this.formGroup.removeControl('resposta')

    this.formGroup.controls.opcoes.setValue(this.teste);
    console.log(this.formGroup.value.opcoes);
    console.log(this.formGroup.value);
    this.configuracaoJogoService.cadastrarQuestao(this.formGroup.value).subscribe(res =>{
      this.alertSucessoCadastro()

    })

  }
  adicionarResposta() {
    this.quantidadeResposta.push({});
  }
  alertSucessoCadastro(){
    let alert = this.alertCtrl.create({
      title:'Success!',
      message:'Issues defined!',
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

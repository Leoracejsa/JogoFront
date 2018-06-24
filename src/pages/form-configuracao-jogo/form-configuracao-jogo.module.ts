import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormConfiguracaoJogoPage } from './form-configuracao-jogo';

@NgModule({
  declarations: [
    FormConfiguracaoJogoPage,
  ],
  imports: [
    IonicPageModule.forChild(FormConfiguracaoJogoPage),
    ComponentsModule
  ],
})
export class FormConfiguracaoJogoPageModule {}

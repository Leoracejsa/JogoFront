import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaJogoPage } from './tela-jogo';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TelaJogoPage,
  ],
  imports: [
    IonicPageModule.forChild(TelaJogoPage),
    ComponentsModule
  ],
})
export class TelaJogoPageModule {}

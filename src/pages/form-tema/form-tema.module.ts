import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormTemaPage } from './form-tema';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    FormTemaPage,
  ],
  imports: [
    IonicPageModule.forChild(FormTemaPage),
    ComponentsModule
  ],
})
export class FormTemaPageModule {}

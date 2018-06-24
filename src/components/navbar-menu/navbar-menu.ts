import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

/**
 * Generated class for the NavbarMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'navbar-menu',
  templateUrl: 'navbar-menu.html'
})
export class NavbarMenuComponent {

  text: string;

  constructor(
  public navCtrl:NavController) {
  }
  openPage(page,event){
    event.preventDefault()
    this.navCtrl.setRoot(page)
  }


}

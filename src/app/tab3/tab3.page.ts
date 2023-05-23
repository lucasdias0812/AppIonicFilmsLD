import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { IAtor } from '../model/IAtor';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}
  listaAtores: IAtor[] = [
    {
      nome: 'Robert Downey Jr.',
      cartaz: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/640px-Robert_Downey%2C_Jr._2012.jpg',
      filmes: ['Homem de Ferro', 'Vingadores'],
      favorito:false
    },
    {
      nome: 'Chris Evans',
      cartaz: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg',
      filmes: ['Capitão América', 'Vingadores'],
      favorito:false
    },
    {
      nome: 'Vin Diesel',
      cartaz: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/VinDieselMarch09.jpg/220px-VinDieselMarch09.jpg',
      filmes: ['Velozes e Furiosos', 'Guardiões da Galáxia'],
      favorito:false
    },
  ]
  exibirAtor(ator: IAtor){
    const navigationExtras: NavigationExtras = {state:{paramAtor:ator}};
    this.router.navigate(['ator-detalhe'],navigationExtras);

}
async exibirAlertaFavorito(ator: IAtor) {
  const alert = await this.alertController.create({

    header: 'Meus Favoritos',
    message: 'Deseja realmente favoritar o ator?',
    buttons: [
      {
        text: 'Não',
        role: 'cancel',
        handler: () => {
          ator.favorito=false;
        }
      }, {
        text: 'Sim, favoritar.',
        handler: () => {
          ator.favorito=true;
          this.apresentarToast(ator);
        }
      }
    ]
  });
  await alert.present();
}
async apresentarToast(ator : IAtor) {
  const toast = await this.toastController.create({
    message: 'Ator adicionado aos favoritos...',
    duration: 2000,
    color: 'success',
    buttons: [
      {
      text: 'Desfazer',
      handler: ()=>{
        ator.favorito=false;
      }
    }
    ]
  });
  toast.present();
}
}

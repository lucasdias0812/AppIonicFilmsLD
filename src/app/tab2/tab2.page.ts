import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { ISerie } from '../model/ISerie';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}
  listaSeries: ISerie[] = [
    {
      nome: 'The Mandalorian (2019)',
      lancamento: '12/11/2019',
      temporadas: 3,
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg',
      generos: ['Sci-Fi & Fantasy', 'Action' , 'Adventure', 'Drama'],
      pagina: '/mandalorian',
      favorito: false
    },
    {
      nome: 'Rick and Morty (2013)',
      lancamento: '02/12/2013',
      temporadas: 6,
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9OAC2sOt38Ni5NNu9tVXLcrAUyh.jpg',
      generos: ['Animação', 'Comédia', 'Sci-Fi & Fantasy', 'Action & Adventure'],
      pagina: '/rick and morty',
      favorito: false
    },
    {
      nome: 'The Flash (2014)',
      lancamento: '07/10/2014',
      temporadas: 9,
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lFxIoMKqkgTuxpghTPHBjoVstMV.jpg',
      generos: ['Drama', 'Sci-Fi & Fantasy'],
      pagina: '/flash',
      favorito: false
    },
  ];
  exibirSerie(serie: ISerie){
    const navigationExtras: NavigationExtras = {state:{paramSerie:serie}};
    this.router.navigate(['serie-detalhe'],navigationExtras);
  }
  async exibirAlertaFavorito(serie: ISerie) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a serie?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            serie.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            serie.favorito=true;
            this.apresentarToast(serie);
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast(serie: ISerie) {
    const toast = await this.toastController.create({
      message: 'Serie adicionada aos favoritos...',
      duration: 2000,
      color: 'success',
      buttons: [
        {
        text: 'Desfazer',
        handler: ()=>{
          serie.favorito=false;
        }
      }
      ]
    });
    toast.present();
  }

}

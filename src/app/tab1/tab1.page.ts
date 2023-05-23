import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router,
public alertController: AlertController,
public toastController: ToastController) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },
    {
      nome: 'Black Panther: Wakanda Para Sempre (2022)',
      lancamento: '10/11/2022 (BR)',
      duracao: '2h41m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nZ69WTv7n01womaNz3SHa4inA9x.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/black panther',
      favorito: false
    },
    {
      nome: 'Guardiões da Galáxia: Volume 3 (2023)',
      lancamento: '04/05/2023 (BR)',
      duracao: '2h30m',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mgFdvrwlzYi6wLq3zgzOwkiT43k.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/guardioes',
      favorito: false
    },
    {
      nome: 'John Wick: Capítulo 4 (2023)',
      lancamento: '23/03/2023 (BR)',
      duracao: '2h49m',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rXTqhpkpj6E0YilQ49PK1SSqLhm.jpg',
      generos: ['Ação', 'Thriller', 'Crime'],
      pagina: '/jonh wick',
      favorito: false
    }
  ];

  exibirFilme(filme: IFilme){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'],navigationExtras);
  }

  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            filme.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito=true;
            this.apresentarToast(filme);
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast(filme: IFilme) {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      buttons: [
        {
        text: 'Desfazer',
        handler: ()=>{
          filme.favorito=false;
        }
      }
      ]
    });
    toast.present();
  }
}
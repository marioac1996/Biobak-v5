import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import {NavController} from '@ionic/angular';
import { FaunaService } from '../services/fauna.service';

@Component({
  selector: 'app-faunalist',
  templateUrl: './faunalist.page.html',
  styleUrls: ['./faunalist.page.scss'],
})
export class FaunalistPage implements OnInit {
  
  especies: any[] = [];
  items: Array<any>;

  constructor(
    public loadingCtrl: LoadingController,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private navCtrl:NavController,
    private faunaService: FaunaService
  ) { }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.getData();
    }
  
  }
  // inicio del buscador

  buscar(event){
    console.log(event);

  }

  //fin del buscador
  async getData(){
    const loading = await this.loadingCtrl.create({
      message: 'Por favor espere...'
    });
    this.presentLoading(loading);

    this.route.data.subscribe(routeData => {
      routeData['data'].subscribe(data => {
        loading.dismiss();
        this.items = data;
      })
    })
  }
  async presentLoading(loading) {
    return await loading.present();
  }

}

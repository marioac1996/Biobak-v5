import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  items: Array<any>;
  listItems;

  constructor(
    public loadingCtrl: LoadingController,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private navCtrl:NavController
  ) { }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.getData();
    }
  }
  initializeItems(){ 
    this.items = this.listItems;
  }
  getItems(ev:any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.payload.doc.data().title.toLowerCase().includes(val.toLowerCase()));
      })
    }
    
  }
  async getData(){
    const loading = await this.loadingCtrl.create({
      message: 'Por favor espere...'
    });
    this.presentLoading(loading);

    this.route.data.subscribe(routeData => {
      routeData['data'].subscribe(data => {
        loading.dismiss();
        this.items = data;
        this.listItems=data;
      })
    })
  }
  async presentLoading(loading) {
    return await loading.present();
  }

  logout(){
    this.authService.logoutUser()
    .then(res => {
      this.router.navigate(["/login"]);
    }, err => {
      console.log(err);
    })
  }

}

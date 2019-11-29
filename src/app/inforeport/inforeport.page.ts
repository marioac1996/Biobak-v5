import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-inforeport',
  templateUrl: './inforeport.page.html',
  styleUrls: ['./inforeport.page.scss'],
})
export class InforeportPage implements OnInit {

  validations_form: FormGroup;
  image: any;
  item: any;
  title: any;
  load: boolean = false;

  constructor(
    private imagePicker: ImagePicker,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private firebaseService: ReportService,
    private webview: WebView,
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.route.data.subscribe(routeData => {
     let data = routeData['data'];
     if (data) {
       this.item = data;
       this.image = this.item.image;
       this.title = this.item.title;
     }
    })
  }


  async delete() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: 'Reporte solucionado eliminar ' + this.item.affair + '?',
      buttons: [
        {
          text: 'No',
          role: 'cancelar',
          cssClass: 'secondary',
          handler: () => {}
        },
        {
          text: 'Sí',
          handler: () => {
            this.firebaseService.deleteTask(this.item.id)
            .then(
              res => {
                this.router.navigate(["/report"]);
              },
              err => console.log(err)
            )
          }
        }
      ]
    });
    await alert.present();
  }

}
import { Component, OnInit,ElementRef,ViewChild,AfterViewInit } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NavController} from '@ionic/angular'
declare var google;
@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit{
	latitude: any;
	longitude: any;
	@ViewChild('mapElement') mapNativeElement: ElementRef;
	map:any;
	image:any;

  constructor(public navCtrl:NavController,private geolocation:Geolocation) { 
  	const that = this;
  	setTimeout(
  		function (){
  			that.GoogleMap();
  		},2000
  		);
  }
  GoogleMap(){
  	var latlng = new google.maps.LatLng(18.67, -88.39);
  	this.map = new google.maps.Map(document.getElementById('map'),
  	{
  		zoom:12,
  		center:latlng,
  		zoomControl: true,
  		myLocationButton: true,
  		myLocation: true,
  		controls: {
		    'compass': true,
		    'myLocationButton': true,
		    'myLocation': true,   // (blue dot)
		    'indoorPicker': true,
		    'zoom': true,          // android only
		    'mapToolbar': true     // android only
	  	},
  	}
  		);
  	this.image ='assets/icon/aviso.jpg';
  	let oficina = new google.maps.Marker({
  		position:{lat:18.675083, lng:-88.391696},
  		map:this.map,
  		icon:this.image
  	});
  }

  ngOnInit() {

  }
  /*
  **Codigo de geolocalizacion
  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
        center: {lat: 18.675052, lng: -88.391799},
        zoom: 16
      });
      const pos = {
        lat: this.latitude,
        lng: this.longitude
      };
      map.setCenter(pos);
      const icon = {
        url: 'assets/icon/aviso.jpg', // image url
        scaledSize: new google.maps.Size(50, 50), // scaled size
      };
      const marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'Hello World!',
        icon: icon
      });
      const contentString = '<div id="content">' +
          '<div id="siteNotice">' +
          '</div>' +
          '<h1 id="firstHeading" class="firstHeading">Bacalar</h1>' +
          '<div id="bodyContent">' +
          '<img src="assets/icon/u.png" width="200">' +
          '<p><b>Bacalar</b>, es una población del estado mexicano de Quintana Roo,' +
          'situada en el sur de su territorio a unos 40 km al norte de la capital ' +
          'Chetumal. Desde el 2 de febrero de 2011 es cabecera del municipio' +
          'de Bacalar.</p>' +
          '<p>Atribución: Bacalar, <a href="http://bacalar.gob.mx/">' +
          'http://bacalar.gob.mx/</a> ' +
          '.</p>' +
          '</div>' +
          '</div>';
      const infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400
      });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
  */

}

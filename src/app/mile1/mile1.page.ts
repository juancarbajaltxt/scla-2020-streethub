import { Component, OnInit, Input, ViewChild ,ElementRef } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';
import {GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, GoogleMapsAnimation, MyLocation } from '@ionic-native/google-maps';

@Component({
  selector: 'app-mile1',
  templateUrl: './mile1.page.html',
  styleUrls: ['./mile1.page.scss'],
})
export class Mile1Page implements OnInit {

  map: GoogleMap; //<- declare the variable
  address:MyLocation;
  places : Array<any> ;
  @ViewChild('map') mapElement: ElementRef;
    constructor(
      public toastCtrl: ToastController,
      private platform: Platform
    ) { } 
  
    ngOnInit() {
      // Since ngOnInit() is executed before `deviceready` event,
      // you have to wait the event.
      this.platform.ready();
      this.loadMap();
      
    }

      loadMap() {
        this.map = GoogleMaps.create('map_canvas', {
          //camera: {
            //target: {
              //lat: 43.0741704,
              //lng: -89.3809802
            //},
            //zoom: 18,
            //tilt: 30
          //}
        });
        this.goToMyLocation();
      }

      goToMyLocation(){
        this.map.clear();
    
        // Get the location of you
        this.map.getMyLocation().then((location: MyLocation) => {
          console.log(JSON.stringify(location, null ,2));
    
          // Move the map camera to the location with animation
          this.map.animateCamera({
            target: location.latLng,
            zoom: 17,
            duration: 3000
          });

            //add a marker
            //let marker: Marker = this.map.addMarkerSync({
              //title: 'Sample Marker',
              //snippet: 'This is a description of the sample marker.',
              //position: location.latLng,
              //animation: GoogleMapsAnimation.BOUNCE
            //});

              //show the infoWindow
              //marker.showInfoWindow();
    
                //If clicked it, display the alert
                //marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
                  //this.showToast('This is a pop out!');
                //});

              //this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
                //(data) => {
                    //console.log("Click MAP",data);
                //}
              //);
          })

        .catch(err => {
         //this.loading.dismiss();
           this.showToast(err.error_message);
        });
    }
    async showToast(message: string) { let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
   });
    toast.present();
  }
}

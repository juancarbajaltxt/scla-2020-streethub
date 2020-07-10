import { Component, OnInit, Input, ViewChild ,ElementRef } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';
import {GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, GoogleMapsAnimation, MyLocation } from '@ionic-native/google-maps';
@Component({
  selector: 'app-crepaselrey',
  templateUrl: './crepaselrey.page.html',
  styleUrls: ['./crepaselrey.page.scss'],
})
export class CrepaselreyPage implements OnInit {

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
              zoom: 19,
              duration: 3000
            });
              //a marker
          let marker1: Marker = this.map.addMarkerSync({
            title: 'Elotero',
            snippet: '@elotes,@esquites',
            position: {
              lat: 34.023528,
              lng: -118.265320
            },
            animation: GoogleMapsAnimation.BOUNCE
          });
  
          
          //a marker
          let marker2: Marker = this.map.addMarkerSync({
            title: 'Tacos Los Pelones',
            snippet: '@tacos,@vampiros',
            position: {
              lat: 34.019296,
              lng: -118.268001
            },
            animation: GoogleMapsAnimation.BOUNCE
          }); 
          
          //a marker
          let marker3: Marker = this.map.addMarkerSync({
            title: 'Taquero',
            snippet: '@tacos,quesadillas',
            position: {
              lat: 34.016336, 
              lng: -118.264832
            },
            animation: GoogleMapsAnimation.BOUNCE
          });
          
          //a marker
          let marker4: Marker = this.map.addMarkerSync({
            title: 'Tacos El Mazapan',
            snippet: '@tacos,@quesadillas,@burros',
            position: {
              lat: 34.020971, 
              lng: -118.189337
            },
            animation: GoogleMapsAnimation.BOUNCE
          }); 
          
          //a marker
          let marker5: Marker = this.map.addMarkerSync({
            title: 'Tamalera',
            snippet: '@tamales',
            position: {
              lat: 34.022427, 
              lng: -118.265969
            },
            animation: GoogleMapsAnimation.BOUNCE
          }); 
          
          //a marker
          let marker6: Marker = this.map.addMarkerSync({
            title: 'Churros',
            snippet: '@churros',
            position: {
              lat: 34.040642, 
              lng: -118.186959
            },
            animation: GoogleMapsAnimation.BOUNCE
          }); 
          
          //a marker
          let marker7: Marker = this.map.addMarkerSync({
            title: 'Crepas El Rey',
            snippet: '@crepes',
            position: {
              lat: 34.009822, 
              lng: -118.265375
            },
            animation: GoogleMapsAnimation.BOUNCE
          }); 
          //show the infoWindow
          marker7.showInfoWindow();

          //If clicked it, display the alert
          marker7.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          this.showToast('Sell delicious tacos, burritos, and quesadillas!');
          });
          
          //a marker
          let marker8: Marker = this.map.addMarkerSync({
            title: 'Fruit',
            snippet: '@fruit',
            position: {
              lat: 34.040708,  
              lng: -118.184587
            },
            animation: GoogleMapsAnimation.BOUNCE
          }); 
          
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

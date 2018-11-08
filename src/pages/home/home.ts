import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { Camera,CameraOptions} from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pic:any;
  img:any;

  constructor(public navCtrl: NavController,
    private camera:Camera,
    private file: File,
    private loadingCtrl:LoadingController,
    private transfer: FileTransfer,
    private http:HTTP
    ) {}

  pickPhoto(){
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        saveToPhotoAlbum:false
      }
  
      this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        this.pic = 'data:image/jpeg;base64,' + imageData;
        this.img = imageData;
      }, (err) => {
        // Handle error
      });
    }


  uploadImage(){
    this.http.put('http://192.168.8.102:5000/upload', {"the_file":this.img}, {})
  .then(data => {
    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
    
  }




}

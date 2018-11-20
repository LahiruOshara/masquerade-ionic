import { Component } from '@angular/core';
import { NavController, LoadingController,IonicPage} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, /*FileUploadOptions, FileTransferObject*/ } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { HTTP } from '@ionic-native/http';

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  pic: any;
  img: any;

  constructor(public navCtrl: NavController,
    private camera: Camera,
    private file: File,
    private loadingCtrl: LoadingController,
    private transfer: FileTransfer,
    private http: HTTP
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
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


  pickPhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
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


  uploadImage() {
    this.http.post('http://192.168.8.100:5000/upload', { "the_file": this.img,"product_id":2 }, {})
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


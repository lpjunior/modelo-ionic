import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { UploadImagemProvider } from "../../providers/upload-imagem/upload-imagem";
import { FileTransferObject, FileUploadOptions, FileTransfer } from "@ionic-native/file-transfer";
import { CameraOptions, Camera } from "@ionic-native/camera";

@IonicPage()
@Component({
  selector: 'page-upload-foto',
  templateUrl: 'upload-foto.html',
  providers: [
    UploadImagemProvider
  ]
})
export class UploadFotoPage {

  imageURI:any;
  imageFileName:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public toastCtrl: ToastController, private upload: UploadImagemProvider, private transfer: FileTransfer, private camera: Camera) {}

  ionViewDidLoad() {}
  
  uploadFile() {

    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });

    loader.present();

    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }

    fileTransfer.upload(this.imageURI, 'http://localhost/ws/', options)
      .then((data) => {
      console.log(data + " Uploaded Successfully");
      this.imageFileName = "assets/imgs/logo.png"
      loader.dismiss();
      this.presentToast("Imagem enviada com sucesso");
    }, (err) => {
      console.log(err);
      loader.dismiss();
      this.presentToast(err);
    });
  }

  getImage() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }

  private presentToast(msg:any) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TutorialPageModule } from "../pages/tutorial/tutorial.module";

import { HttpModule } from '@angular/http';
import { TabsPageModule } from "../pages/tabs/tabs.module";
import { CadastrarPageModule } from "../pages/cadastrar/cadastrar.module";
import { WebserviceCorreiosProvider } from '../providers/webservice-correios/webservice-correios';
import { ListAddressesPageModule } from "../pages/list-addresses/list-addresses.module";
import { UserProvider } from '../providers/user/user';
import { ListUsersPageModule } from "../pages/list-users/list-users.module";
import { ConfigProvider } from '../providers/config/config';

import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';

import { UploadFotoPageModule } from "../pages/upload-foto/upload-foto.module";
import { UploadImagemProvider } from '../providers/upload-imagem/upload-imagem';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TutorialPageModule,
    HttpModule,
    TabsPageModule,
    CadastrarPageModule,
    ListAddressesPageModule,
    ListUsersPageModule,
    UploadFotoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebserviceCorreiosProvider,
    UserProvider,
    ConfigProvider,
    FileTransfer,        
    File,
    Camera,
    UploadImagemProvider,
  ]
})
export class AppModule {}

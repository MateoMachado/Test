import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SidebarModule } from 'ng-sidebar';
import { HeaderComponent } from './Shared/header/header.component';
import { CreateFrontComponent } from './Components/front-list/create-front/create-front.component';
import { FrontListComponent } from './Components/front-list/front-list.component';
import { ViewFrontComponent } from './Components/view-front/view-front.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontListComponent,
    CreateFrontComponent,
    ViewFrontComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

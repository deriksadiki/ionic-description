import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InstComponent } from './inst/inst.component';
import { StartComponent } from './start/start.component';
import { BuildComponent } from './build/build.component';
import { PubComponent } from './pub/pub.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstComponent,
    StartComponent,
    BuildComponent,
    PubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component:HomeComponent},
      {path: 'inst', component:InstComponent},
      {path: 'start', component:StartComponent},
      {path: 'build', component:BuildComponent},
      {path: 'pub', component:PubComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

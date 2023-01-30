import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgFallimgModule  } from "ng-fallimg";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFallimgModule.forRoot({
      default:'/assets/tintomalbec.png'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

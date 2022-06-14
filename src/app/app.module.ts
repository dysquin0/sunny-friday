import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us/about-us.component';
import { OurServicesComponent } from './pages/our-services/our-services/our-services.component';
import { WorkWithUsComponent } from './pages/work-with-us/work-with-us/work-with-us.component';
import { DefaultComponent } from './common/default/default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    OurServicesComponent,
    WorkWithUsComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

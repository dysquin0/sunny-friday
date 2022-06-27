import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { SFCommonModule } from './common/sf-common.module';
import { HomeModule } from './pages/home/home.module';
import { ContactUsModule } from './pages/contact-us/contact-us.module';
import { AboutUsModule } from './pages/about-us/about-us.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    SFCommonModule,
    HomeModule,
    LayoutModule,
    ContactUsModule,
    FormsModule,
    AboutUsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

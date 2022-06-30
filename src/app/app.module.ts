import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import { MatPaginatorIntl } from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { SFCommonModule } from './common/sf-common.module';

import { HomeModule } from './pages/home/home.module';
import { ContactUsModule } from './pages/contact-us/contact-us.module';
import { OurServicesModule } from './pages/our-services/our-services.module';
import { OurProjectsModule } from './pages/our-projects/our-projects.module';
import { WorkWithUsModule } from './pages/work-with-us/work-with-us.module';
import { WorkWithUsPaginatorIntl } from './pages/work-with-us/work-with-us-paginator-intl';
import { AboutUsModule } from './pages/about-us/about-us.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    SFCommonModule,
    LayoutModule,
    FormsModule,
    HomeModule,
    ContactUsModule,
    OurServicesModule,
    OurProjectsModule,
    WorkWithUsModule,
    AboutUsModule,
  ],
  bootstrap: [AppComponent],

  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: WorkWithUsPaginatorIntl,
    },
  ],
})
export class AppModule {}

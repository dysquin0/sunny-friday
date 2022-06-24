import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SFCommonModule } from '../../common/sf-common.module';
import { HomeComponent } from './home.component';
import { PreFooterComponent } from './components/pre-footer/pre-footer.component';
import { OurProjectsComponent } from './components/our-projects/our-projects.component';
import { OurProjectModalComponent } from 'src/app/common/cards/cards.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';

@NgModule({
  imports: [CommonModule, SharedModule, SFCommonModule],
  exports: [HomeComponent],
  declarations: [
    HomeComponent,
    PreFooterComponent,
    OurProjectsComponent,
    OurProjectModalComponent,
    HomeBannerComponent,
  ],
})
export class HomeModule {}

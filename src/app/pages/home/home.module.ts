import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SFCommonModule } from '../../common/sf-common.module';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { HomeComponent } from './home.component';
import { PreFooterComponent } from './components/pre-footer/pre-footer.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SFCommonModule
    ],
    exports: [
        HomeComponent
    ],
    declarations: [
        HomeComponent,
        OurClientsComponent,
        PreFooterComponent,
        HomeBannerComponent
    ]
})

export class HomeModule {

}
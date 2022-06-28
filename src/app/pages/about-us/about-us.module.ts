import { AboutUsComponent } from './about-us.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SFCommonModule } from '../../common/sf-common.module';
import { AboutUsSectionComponent } from './components/about-us-section/about-us-section.component';
@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SFCommonModule
    ],
    exports: [
        AboutUsComponent
    ],
    declarations: [
        AboutUsComponent,
        AboutUsSectionComponent
    ]
})

export class AboutUsModule {

} 
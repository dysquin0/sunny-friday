import { AboutUsComponent } from './about-us.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SFCommonModule } from '../../common/sf-common.module';
import { OurValuesComponent } from './components/our-values/our-values.component';

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
        OurValuesComponent
        
    ]
})

export class AboutUsModule {

}
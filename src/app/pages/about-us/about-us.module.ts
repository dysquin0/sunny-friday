import { AboutUsComponent } from './about-us.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SFCommonModule } from '../../common/sf-common.module';
import { OurValuesComponent } from './components/our-values/our-values.component';
import { AboutUsSectionComponent } from './components/about-us-section/about-us-section.component';
import { MeetTheTeamComponent } from './components/meet-the-team/meet-the-team.component';

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
        OurValuesComponent,
        AboutUsSectionComponent,
        MeetTheTeamComponent
        
    ]
})

export class AboutUsModule {

}
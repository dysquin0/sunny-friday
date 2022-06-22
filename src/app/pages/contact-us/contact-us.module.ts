import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SFCommonModule } from '../../common/sf-common.module';
import { MessageUsComponent } from './components/message-us/message-us.component';
import { FindUsComponent } from './components/find-us/find-us.component';
import { ContactUsComponent } from './contact-us.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SFCommonModule
    ],
    exports: [
        ContactUsComponent
    ],
    declarations: [
        ContactUsComponent,
        FindUsComponent,
        MessageUsComponent
    ]
})

export class ContactUsModule {

}
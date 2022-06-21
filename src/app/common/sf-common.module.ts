import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { DefaultComponent } from './default/default.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactUsBtnComponent } from './contact-us-btn/contact-us-btn.component';
@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule,
        AppRoutingModule     
    ],
    exports: [
        DefaultComponent,
        HeaderComponent,
        NavigationComponent,
        ContactUsBtnComponent
    ],
    declarations: [
        DefaultComponent,
        HeaderComponent,
        NavigationComponent,
        ContactUsBtnComponent
    ]
})

export class SFCommonModule {

}
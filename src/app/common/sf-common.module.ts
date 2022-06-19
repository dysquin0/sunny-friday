import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { DefaultComponent } from './default/default.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';


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
        NavigationComponent
    ],
    declarations: [
        DefaultComponent,
        HeaderComponent,
        NavigationComponent
    ]
})

export class SFCommonModule {

}
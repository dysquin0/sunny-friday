import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { DefaultComponent } from './default/default.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactUsBtnComponent } from './contact-us-btn/contact-us-btn.component';
import { CardsComponent } from './cards/cards.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { NavigationLinkComponent } from './navigation-link/navigation-link.component';
@NgModule({
  imports: [CommonModule, SharedModule, MaterialModule, AppRoutingModule],
  exports: [
    DefaultComponent,
    HeaderComponent,
    NavigationComponent,
    ContactUsBtnComponent,
    CardsComponent,
    SectionHeaderComponent,
    NavigationLinkComponent,
  ],
  declarations: [
    DefaultComponent,
    HeaderComponent,
    NavigationComponent,
    ContactUsBtnComponent,
    CardsComponent,
    SectionHeaderComponent,
    NavigationLinkComponent,
  ],
})
export class SFCommonModule {}

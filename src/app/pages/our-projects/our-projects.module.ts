import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SFCommonModule } from '../../common/sf-common.module';
import { OurProjectsComponent } from './our-projects.component';

@NgModule({
  imports: [CommonModule, SharedModule, SFCommonModule],
  exports: [OurProjectsComponent],
  declarations: [OurProjectsComponent],
})
export class OurProjectsModule {}

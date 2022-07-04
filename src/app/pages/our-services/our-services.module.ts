import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SFCommonModule } from '../../common/sf-common.module';
import { OurServicesComponent } from './our-services.component';

@NgModule({
  imports: [CommonModule, SharedModule, SFCommonModule],
  exports: [OurServicesComponent],
  declarations: [OurServicesComponent],
})
export class OurServicesModule {}

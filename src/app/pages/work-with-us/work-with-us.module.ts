import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SFCommonModule } from '../../common/sf-common.module';
import { WorkWithUsComponent } from './work-with-us.component';

@NgModule({
  imports: [CommonModule, SharedModule, SFCommonModule],
  exports: [WorkWithUsComponent],
  declarations: [WorkWithUsComponent],
  
})
export class WorkWithUsModule {}

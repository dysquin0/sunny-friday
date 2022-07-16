import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const sharedModules: any[] = [
  CommonModule,
  FormsModule,
  MaterialModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: sharedModules,
  exports: sharedModules,
})
export class SharedModule {}

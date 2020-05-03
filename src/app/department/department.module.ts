import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
// import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [DepartmentComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    // SharedModule,
    // !importing material module which is required than importing complete shared module
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [DepartmentComponent],
})
export class DepartmentModule {}

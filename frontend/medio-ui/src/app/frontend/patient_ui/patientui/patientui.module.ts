import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule, MatButtonModule } from '@angular/material';
import { PatientuiComponent } from './patientui.component';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    PatientuiComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  exports: [
    PatientuiComponent
  ]
})
export class PatientuiModule { }

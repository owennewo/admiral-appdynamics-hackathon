import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientuiComponent } from './frontend/patient_ui/patientui/patientui.component';
import { PodComponent } from './pod/pod.component';


const routes: Routes = [
  {
    path: '', component: PatientuiComponent,
    
  },
  {
    path: 'pod', component: PodComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
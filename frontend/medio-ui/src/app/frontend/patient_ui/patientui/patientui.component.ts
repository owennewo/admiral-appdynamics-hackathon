import { Component, OnInit, OnDestroy } from '@angular/core';
import { Prescription } from 'src/app/model/prescription';
import { PrescriptionService } from 'src/app/service/prescription.service';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-patientui',
  templateUrl: './patientui.component.html',
  styleUrls: ['./patientui.component.css']
})
export class PatientuiComponent implements OnInit, OnDestroy {

  prescription: Prescription;
  sub: Subscription;

  constructor(private prescriptionService: PrescriptionService) { }

  ngOnInit() {

    this.sub = this.prescriptionService.currentPrescription.subscribe((prescription)=>{
      this.prescription = prescription;
    });
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

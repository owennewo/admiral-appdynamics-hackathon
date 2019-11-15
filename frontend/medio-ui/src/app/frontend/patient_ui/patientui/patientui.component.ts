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

//  prescription: Prescription;
  sub: Subscription;
  prescription : Prescription =    { 
  conditions: [],
  courseDurationDays: 20,
  doctorName: "Dr. Bob Smith",
  doctorNumber: "01945 411411",
  instructions: ["Take one twice a day", "Put tablet under tongue"],
  intervalSeconds: 5,
  medication: ["2x Polo, twice daily", "1x Smarties, 5 times daily"],
  
  nextPrescriptionSeconds: 10,
  perDay: 3,
  quantityRemaining: 4,
  quantityTotal: 7,
  sideEffects: ["Contains Laxatives", "Bad side effect"],
  patientEmail:"foo",
  patientName: 'bar'
  }
  
  //Tabs
  homeTab: boolean = true;
  prescriptionTab: boolean = false;
  infoTab: boolean = false;
  contactGPTab: boolean = false;
  aboutTab: boolean = false;


  constructor(private prescriptionService: PrescriptionService) { }

  ngOnInit() {

    this.sub = this.prescriptionService.currentPrescription.subscribe((prescription)=>{
      //this.prescription = prescription;
    });
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    
  }


  homeButtonClick(event: Event) {
    this.homeTab = true;
    this.prescriptionTab = false;
    this.infoTab = false;
    this.contactGPTab = false;
    this.aboutTab = false;
    
  }

  prescriptionButtonClick(event: Event) {
    this.homeTab = false;
    this.prescriptionTab = true;
    this.infoTab = false;
    this.contactGPTab = false;
    this.aboutTab = false;
  }

  infoButtonClick(event: Event) {
    this.homeTab = false;
    this.prescriptionTab = false;
    this.infoTab = true;
    this.contactGPTab = false;
    this.aboutTab = false;
  }

  contactButtonClick(event: Event) {
    this.homeTab = false;
    this.prescriptionTab = false;
    this.infoTab = false;
    this.contactGPTab = true;
    this.aboutTab = false;
  }

  aboutButtonClick(event: Event) {
    this.homeTab = false;
    this.prescriptionTab = false;
    this.infoTab = false;
    this.contactGPTab = false;
    this.aboutTab = true;
  }


}

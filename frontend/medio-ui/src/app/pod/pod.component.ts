import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../service/prescription.service';
import { Router } from '@angular/router';
import { Prescription } from '../model/prescription';

@Component({
  selector: 'app-pod',
  templateUrl: './pod.component.html',
  styleUrls: ['./pod.component.css']
})
export class PodComponent implements OnInit {

  constructor(private prescriptionServive: PrescriptionService, private router: Router) { }

  prescription: Prescription;

  ngOnInit() {
    this.prescriptionServive.getPrescription().subscribe((prescription)=>{
      this.prescription = prescription;
    });
  }

  load() {
    this.prescriptionServive.loadPrescription("1").subscribe((prescription)=> {
      this.router.navigate(["/"]);
    });
  }

}

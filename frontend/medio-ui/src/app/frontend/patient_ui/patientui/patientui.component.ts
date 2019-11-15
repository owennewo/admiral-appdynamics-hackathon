import { Component, OnInit } from '@angular/core';
import { Prescription } from 'src/app/model/prescription';

@Component({
  selector: 'app-patientui',
  templateUrl: './patientui.component.html',
  styleUrls: ['./patientui.component.css']
})
export class PatientuiComponent implements OnInit {

  prescription : Prescription;
  

  constructor() { }

  ngOnInit() {
  }

}

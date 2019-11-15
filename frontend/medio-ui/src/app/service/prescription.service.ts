import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Prescription } from '../model/prescription';
import { timer } from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  

  poll = true;
  currentPrescription = new BehaviorSubject<Prescription>(null);

  constructor(private http: HttpClient) { 
    // this.loadPrescription();
    // this.takePrescription();

    // this.getPrescription("1").subscribe((pre)=>console.log(pre));
    // this.resetPrescription();
    // this.loadPrescription();
    

    console.log("starting timer")
      timer(0,2000).subscribe(() => {
        if (this.poll) {
          console.log("Polling...")
          this.broadcastCurrentPrescription();
      }  else {
        console.log("Polling skipped...")
      }
    });
  }

  startPolling() {
    this.poll = true;
  }

  stopPolling() {
    this.poll = false;
  }

  broadcastCurrentPrescription() {
    this.http.get("/medio/prescription/current").subscribe((prescription:Prescription)=>{
      // this can be null!
      this.currentPrescription.next(prescription);
    });
  }

  loadPrescription(id: string = "1") {
    this.http.put(`/medio/prescription/${id}/load`,{}).subscribe((prescription:Prescription)=>{
      // this can be null!
      this.currentPrescription.next(prescription);
    });
  }

  getPrescription(id: string = "1"): Observable<Prescription>{
    return this.http.get(`/medio/prescription/${id}`,{}).pipe(
      map(pre => <Prescription> pre)
    );
  }

  takePrescription(id: string = "1") {
    this.http.put(`/medio/prescription/current/take`,{}).subscribe((prescription:Prescription)=>{
      // this can be null!
      this.currentPrescription.next(prescription);
    });
  }

  resetPrescription(id: string = "1") {
    this.http.put(`/medio/prescription/reset`,{}).subscribe(()=>{
      // this can be null!
      this.currentPrescription.next(undefined);
    });
  }
  

}

import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/services/students';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { StudentsService } from 'src/app/services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {

  appoint : Students[];
  appoint1 : Students[];
  constructor(private formBuilder: FormBuilder,
    private _appointService : StudentsService,
    private router : Router
    ) { }

    appointmentForm: FormGroup;

    ngOnInit() {
      this.appointmentForm = this.formBuilder.group({
        pName:['',Validators.required],
        dName:['',Validators.required],
        Date:['',Validators.required]
      });
      this._appointService.getdocs()
      .subscribe((data:Students[]) => {
        this.appoint=data;
      });

      this._appointService.getpat()
      .subscribe((data:Students[]) => {
        this.appoint1=data;
      });
    }
    onAppointmentSubmit(){
      console.log(this.appointmentForm.value);
      this._appointService.createappoint(this.appointmentForm.value)
      .subscribe(data=>{
        this.router.navigate(['user/patient-panel']);
      });
    }
}

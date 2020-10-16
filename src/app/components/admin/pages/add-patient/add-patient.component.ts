import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/services/students.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private _patientService:StudentsService,
    private _snackbar: MatSnackBar,
    private router:Router
    ) { }


    patientForm: FormGroup;

  ngOnInit() {
    this.patientForm = this.formBuilder.group({
      fName:['',Validators.required],
      lName:['',Validators.required],
      Email:['',Validators.required],
      Password:['',[Validators.required,Validators.maxLength(10)]],
      Mobile:['',[Validators.required,Validators.maxLength(10)]],
    });
  }
  onSubmit(){
    // console.log(this.addForm.value);
    this._patientService.createpatient(this.patientForm.value)
    .subscribe(data=> {

      this._snackbar.open('user created and mail sent', 'close', {
        duration: 3000,
        verticalPosition: 'top',
      });

      setTimeout(() => {
        window.location.reload();
      }, 3000);


      // this.router.navigate(['admin/admin-panel']);
    });
  }
}

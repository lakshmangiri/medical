import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { StudentsService } from 'src/app/services/students.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-doc',
  templateUrl: './add-doc.component.html',
  styleUrls: ['./add-doc.component.css']
})
export class AddDocComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private _headService:StudentsService,
    private _snackbar: MatSnackBar,
    private router:Router
    ) { }
    doctorForm: FormGroup;
    ngOnInit() {
      this.doctorForm = this.formBuilder.group({
        fName:['',Validators.required],
        lName:['',Validators.required],
        Email:['',Validators.required],
        Password:['',[Validators.required,Validators.maxLength(10)]],
        Mobile:['',[Validators.required,Validators.maxLength(10)]],
      });
    }
    onSubmit(){
      // console.log(this.addForm.value);
      this._headService.createhead(this.doctorForm.value)
      .subscribe(data => {

        this._snackbar.open('user created and mail sent', 'close', {
          duration: 3000,
          verticalPosition: 'top',
        });

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      
        //  this.router.navigate(['admin/admin-panel']);
      });
    }

}

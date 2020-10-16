import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { StudentsService } from 'src/app/services/students.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-lab',
  templateUrl: './add-lab.component.html',
  styleUrls: ['./add-lab.component.css']
})
export class AddLabComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private _ladService:StudentsService,
    private _snackbar: MatSnackBar,
    private router:Router
    ) { }
    labForm: FormGroup;
  ngOnInit() {
    this.labForm = this.formBuilder.group({
      fName:['',Validators.required],
      lName:['',Validators.required],
      Email:['',Validators.required],
      Password:['',[Validators.required,Validators.maxLength(10)]],
      Mobile:['',[Validators.required,Validators.maxLength(10)]],
    });
  }
  onSubmit(){
    // console.log(this.addForm.value);
    this._ladService.createlad(this.labForm.value)
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

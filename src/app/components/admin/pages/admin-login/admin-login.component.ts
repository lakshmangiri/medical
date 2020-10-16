import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { StudentsService } from '../../../../../app/services/students.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private _adminService:StudentsService,
    private _snackbar: MatSnackBar,
    private router:Router
    ) { }

  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      Name:['',Validators.required],
      Password:['',[Validators.required,Validators.maxLength(10)]],
    });
  }

  onSubmit(){
    // console.log(this.addForm.value);
    this._adminService.getadmin(this.addForm.value)
    .subscribe(data=>{
      if(data==1){
      this.router.navigate(['admin/admin-panel']);
      } else {

        this._snackbar.open('Invalid Username or Password', 'close',
        {
          duration: 3000,
        });

      //  alert("Invalid UserName Password");
      }
     
    });
  }

}
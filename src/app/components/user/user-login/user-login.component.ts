import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Students } from '../../../services/students';
import { StudentsService } from '../../../services/students.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private _loginService:StudentsService,
    private _snackbar: MatSnackBar,
    private router:Router
) { }

userLoginForm: FormGroup;


ngOnInit() {
this.userLoginForm = this.formBuilder.group({
Email:['',Validators.required],
Password:['',[Validators.required,Validators.maxLength(10)]],
Type:['--Choose Category--',Validators.required]
// rePassword:['',Validators.required,Validators.maxLength(10)],
});
}



onSubmit(){
// console.log(this.addForm.value);
this._loginService.createlogin(this.userLoginForm.value)
.subscribe(data=>{
if(data==1){
this.router.navigate(['user/patient-panel']);
} else if(data==2){
this.router.navigate(['user/lab/lab-panel']);
} else if(data==0) {
this.router.navigate(['user/doctor-panel']);
} else {
  this._snackbar.open('Invalid username or password', 'close',{
    duration: 3000,
    verticalPosition: 'top',
  });
// alert("Invalid UserName Password");
}

});
}

  

}

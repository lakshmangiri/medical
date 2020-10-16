import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../../../../services/students.service';
import { Students } from '../../../../../../services/students';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css']
})
export class NewReportComponent implements OnInit {

  reports : Students[];
  constructor(private formBuilder: FormBuilder,
    private _reportsService : StudentsService,
    private router : Router,
    private http:HttpClient
    ) { }

    labReportForm: FormGroup;

    ngOnInit() {
      this.labReportForm = this.formBuilder.group({
        pName:['',Validators.required],
        Report:['',Validators.required],
        Desc:['',Validators.required],
        Image:[null]
      });
      this._reportsService.getpat()
      .subscribe((data:Students[]) => {
        this.reports=data;
      });
  }

  onFileSelect(event){
    const file = event.target.files[0];
    this.labReportForm.get('Image').setValue(file);
    // console.log(file);
  }

  onReportSubmit(){
    // console.log(this.addForm.value);
    // this._reportsService.createreports(this.addForm.value)
    // .subscribe(data=>{
    //   this.router.navigate(['assistant']);
    // });
    const formData = new FormData();
    formData.append('pName',this.labReportForm.get('pName').value);
    formData.append('Report',this.labReportForm.get('Report').value);
    formData.append('Desc',this.labReportForm.get('Desc').value);
    formData.append('myFile',this.labReportForm.get('Image').value);
    this.http.post<any>('http://localhost/medical/reports.php',formData).subscribe(
      (data)=> 
      // console.log(data)
      {
        this.router.navigate(['user/lab/lab-panel']);
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/services/students';
import { StudentsService } from 'src/app/services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-report',
  templateUrl: './medical-report.component.html',
  styleUrls: ['./medical-report.component.css']
})
export class MedicalReportComponent implements OnInit {

  medical : Students[];
  constructor(private _medicalService : StudentsService,
    private router : Router
    ) { }

    ngOnInit() {
      this._medicalService.getmedical()
      .subscribe((data:Students[]) => {
        this.medical=data;
        // console.log(data);
      });
    }

}

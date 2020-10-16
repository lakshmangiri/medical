import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/services/students';
import { StudentsService } from 'src/app/services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-report',
  templateUrl: './scan-report.component.html',
  styleUrls: ['./scan-report.component.css']
})
export class ScanReportComponent implements OnInit {

  scan : Students[];
  constructor(private _scanService : StudentsService,
    private router : Router
    ) { }

    ngOnInit() {
      this._scanService.getscan()
      .subscribe((data:Students[]) => {
        this.scan=data;
        // console.log(data);
      });
    }

}

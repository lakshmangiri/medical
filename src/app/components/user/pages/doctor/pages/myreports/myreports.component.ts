import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/services/students';
import { StudentsService } from 'src/app/services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myreports',
  templateUrl: './myreports.component.html',
  styleUrls: ['./myreports.component.css']
})
export class MyreportsComponent implements OnInit {

   
  myreports : Students[];
  constructor(private _myreportsService : StudentsService,
    private router : Router
    ) { }

    ngOnInit() {
      this._myreportsService.getmyreports()
      .subscribe((data:Students[]) => {
        this.myreports=data;
        // console.log(data);
      });
    }
}

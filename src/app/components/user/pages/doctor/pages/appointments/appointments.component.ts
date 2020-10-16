import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/services/students';
import { StudentsService } from 'src/app/services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

 
  myappoints : Students[];
  constructor(private _myappointService : StudentsService,
    private router : Router
    ) { }

 
    ngOnInit() {
      this._myappointService.getmyappoints()
      .subscribe((data:Students[]) => {
        this.myappoints=data;
        // console.log(data);
      });
    }

}

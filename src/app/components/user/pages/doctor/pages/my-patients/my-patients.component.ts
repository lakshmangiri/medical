import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../../../../services/students.service';
import { Students } from '../../../../../../services/students';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-patients',
  templateUrl: './my-patients.component.html',
  styleUrls: ['./my-patients.component.css']
})
export class MyPatientsComponent implements OnInit {

  mypatients : Students[];
  constructor(private _mypatientsService : StudentsService,
    private router : Router
    ) { }

    ngOnInit() {
      this._mypatientsService.getmypatients()
      .subscribe((data:Students[]) => {
        this.mypatients=data;
        // console.log(data);
      });
    }

}

import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../../services/students.service';
import { Students } from '../../../../services/students';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  doctor : Students[];
  constructor(private _doctorService : StudentsService,
    private router : Router
    ) { }

    ngOnInit() {
      this._doctorService.getdoctor()
      .subscribe((data:Students[]) => {
        this.doctor=data;
        // console.log(data);
      });
    }

}

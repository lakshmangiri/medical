import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from './students';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { }

  getstudents(){
   return this.http.get<Students[]>('http://localhost/medical/login.php');
  }

  deletestudent(id:number){
    return this.http.delete<Students[]>('http://localhost/medical/delete.php?id='+id);
  }

  createlogin(login:Students){
    return this.http.post('http://localhost/medical/insert.php',login);
  }

  getelementbyId(_id:number){
    return this.http.get<Students[]>('http://localhost/medical/select.php?id='+_id);
  }

  updatestudent(student:Students){
    return this.http.put('http://localhost/medical/update.php'+'?id='+student.id,student);
  }

  getadmin(admin:Students){
    return this.http.post('http://localhost/medical/admin.php',admin);
  }

  createpatient(patient:Students){
    return this.http.post('http://localhost/Healthcare/patient.php',patient);
  }

  createlad(lad:Students){
    return this.http.post('http://localhost/Healthcare/lab.php',lad);
  }

  createhead(head:Students){
    return this.http.post('http://localhost/Healthcare/head.php',head);
  }

  getdoctor(){
    return this.http.get<Students[]>('http://localhost/medical/doctor.php');
   }

   getdocs(){
    return this.http.get<Students[]>('http://localhost/medical/sel_doc.php');
   }

   getpat(){
    return this.http.get<Students[]>('http://localhost/medical/sel_pat.php');
   }

   createappoint(appoint:Students){
    return this.http.post('http://localhost/medical/appoint.php',appoint);
  }

  // createreports(reports:Students){
  //   return this.http.post('http://localhost/medical/reports.php',reports);
  // }

  getmedical(){
    return this.http.get<Students[]>('http://localhost/medical/medical.php');
   }

   getscan(){
    return this.http.get<Students[]>('http://localhost/medical/scan.php');
   }

   getmypatients(){
    return this.http.get<Students[]>('http://localhost/medical/mypatients.php');
   }

   getmyappoints(){
    return this.http.get<Students[]>('http://localhost/medical/myappoints.php');
   }

   getmyreports(){
    return this.http.get<Students[]>('http://localhost/medical/myreports.php');
   }
  
}

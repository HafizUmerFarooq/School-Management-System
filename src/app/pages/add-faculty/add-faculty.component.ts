import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAddFaculty } from 'src/app/models/faculty';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.scss']
})
export class AddFacultyComponent implements OnInit {
  id:string = '';
  faculty: IAddFaculty = {name:'',phone:0,address:'',salary:0,dateOfJoining: new Date};

  constructor(
    private route:ActivatedRoute,
    private http: HttpClient,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((param:any)=>{
      this.id = param.id;
      if(this.id){
        this.getFaculty();
      }
      console.log('this.id: ', this.id);
    });
  }

  getFaculty(){
    this.http.get('http://localhost:3000/faculty/'+this.id,).subscribe((res:any)=>{
      this.faculty.name = res.records.name;
      this.faculty.phone = res.records.phone;
      this.faculty.address = res.records.address;
      this.faculty.salary = res.records.salary;
      this.faculty.dateOfJoining = res.records.dateOfJoining;
      console.log('res: ', this.faculty);
    });
  }


  submitForm(){
    if(this.id){
      this.http.put('http://localhost:3000/faculty/'+this.id,this.faculty).subscribe((res:any)=>{
        this.router.navigate(['faculty'],{});
      });
    } else {
      this.http.post('http://localhost:3000/faculty',this.faculty).subscribe((res:any)=>{
        this.router.navigate(['faculty'],{});
      });
    };
  }

}
